import { FiArrowRight } from 'react-icons/fi'
import './Banner.scss'

const Banner = () => {
  return (
    <section className="banner">
      <div className="app-container banner__inner">
        <div className="banner__content">
            <h1 className="banner__heading">
               New Arrivals
            </h1>
            <a href="#products" className="btn-primary btn-lg banner__cta">
              Shop Now
              <FiArrowRight size={18} />
            </a>
        </div>
      </div>
    </section>
  )
}

export default Banner