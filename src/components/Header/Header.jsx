import { FiSearch, FiUsers } from 'react-icons/fi'
import './Header.scss'


const Header = ({ onUsersClick = () => {} }) => {
  return (
    <header className="header">
      <div className="app-container header__inner">
        <a className="header__logo" href="/">
          <span className="header__logo-mark">A</span>
          <span className="header__logo-text">Ajio</span>
        </a>

        <div className="header__search">
          <FiSearch className="header__search-icon" size={18} />
          <input
            type="text"
            className="header__search-input"
            placeholder="Search products..."
          />
        </div>

        <nav className="header__actions">
          <button
            type="button"
            className="header__users-link"
            onClick={onUsersClick}
          >
            <FiUsers size={18} />
            <span>Users</span>
          </button>

          <button
            type="button"
            className="badge-circle header__avatar"
            onClick={onUsersClick}
            aria-label="View registered users"
          >
            BM
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header