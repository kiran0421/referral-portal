import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi'
import './Footer.scss'

const FOOTER_LINKS = {
  Shop: ['New Arrivals', 'Best Sellers', 'Sale'],
  Company: ['About Us', 'Careers', 'Press'],
  Help: ['Contact', 'FAQs', 'Shipping & Returns'],
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="app-container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Marque</span>
          <p className="footer__tagline">
            Fewer choices, better ones — everyday products picked for
            quality, not clutter.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Twitter" className="footer__social-link">
              <FiTwitter size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="footer__social-link">
              <FiInstagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="footer__social-link">
              <FiFacebook size={16} />
            </a>
          </div>
        </div>

        <div className="footer__columns">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div className="footer__column" key={heading}>
              <h4 className="footer__column-heading">{heading}</h4>
              <ul className="footer__column-list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__column-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="app-container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Marque. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer