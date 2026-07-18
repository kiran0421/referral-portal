import './ProductCard.scss'

const ProductCard = ({ title, description, price, image }) => {
  return (
    <article className="product-card card card-hover">
      <div className="product-card__image-wrap">
        <img
          src={image}
          alt={title}
          className="product-card__image"
          loading="lazy"
        />
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>
        <span className="product-card__price">${price}</span>
      </div>
    </article>
  )
}

export default ProductCard