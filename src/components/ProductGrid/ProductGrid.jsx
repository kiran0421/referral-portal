import { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.scss'
import { getProducts } from '../../services/api'


const ProductGrid = () => {
    const [products, setProducts]=useState([])
    const [loading, setLoading]=useState(true)
    const [error, setError]= useState(null)
    useEffect(() => {
    let ignore = false

    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getProducts()
        if (!ignore) setProducts(data)
      } catch (err) {
        if (!ignore) setError(err)
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    fetchProducts()

    return () => {
      ignore = true
    }
  }, [])

  if (loading) {
    return <p className="product-grid__status">Loading products…</p>
  }

  if (error) {
    return (
      <p className="product-grid__status product-grid__status--error">
        Something went wrong while loading products.
      </p>
    )
  }
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.thumbnail}
        />
      ))}
    </div>
  )
}

export default ProductGrid