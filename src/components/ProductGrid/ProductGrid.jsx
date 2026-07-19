import { useCallback, useEffect, useRef, useState } from 'react'
import { getProducts } from '../../services/api'
import ProductCard from '../ProductCard/ProductCard'
import Loader from '../Loader/Loader'
import './ProductGrid.scss'
import { useGeoCurrency } from '../../hooks/useGeoCurrency'


const ProductGrid = ({ searchTerm = '' }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { currency, rate } = useGeoCurrency()
  const mountedRef = useRef(true)
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getProducts()
      if (mountedRef.current) setProducts(data)
    } catch (err) {
      if (mountedRef.current) setError(err)
    } finally {
      if (mountedRef.current) setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="product-grid__error">
        <p className="product-grid__error-text">
          Something went wrong while loading products.
        </p>
        <button type="button" className="btn-primary" onClick={fetchProducts}>
          Retry
        </button>
      </div>
    )
  }
  const formatPrice = (usdPrice) => {
  const converted = usdPrice * rate
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(converted)
}
 const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  )

  if (filteredProducts.length === 0) {
    return <p className="product-grid__empty">No products match "{searchTerm}".</p>
  }

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={formatPrice(product.price)}
          image={product.thumbnail}
        />
      ))}
    </div>
  )
}

export default ProductGrid