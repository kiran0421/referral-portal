import './Header.scss';
import { LogoIcon } from '../../assets/icons';
import navLinks from '../../data/nav';

const Header = ({ avatarUrl = 'https://i.pravatar.cc/64?img=12' }) => (
  <header className="topbar">
    <div className="topbar-logo">
      <span className="topbar-logo-icon">
        <LogoIcon />
      </span>
      <span className="topbar-logo-text">
        <span>REFERRAL</span>
        <span>PORTAL</span>
      </span>
    </div>

    <nav className="topbar-nav">
      {navLinks.map((link) => (
        <a key={link.id} href={link.href} className={link.active ? 'active' : ''}>
          {link.label}
        </a>
      ))}
    </nav>

    <div className="topbar-right">
      <span className="topbar-divider" />
      <span className="topbar-avatar">
        <img src={avatarUrl} alt="User avatar" />
      </span>
    </div>
  </header>
);

export default Header;