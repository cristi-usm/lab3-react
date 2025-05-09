import styles from './Header.module.css';
import logo from '@assets/logo/brand-logo.svg';
import menuIcon from '@assets/icons/menu.svg';
import searchIcon from '@assets/icons/search.svg';
import userIcon from '@assets/icons/user.svg';
import favouritesIcon from '@assets/icons/favourites.svg';
import cartIcon from '@assets/icons/shopping-cart.svg';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className={styles.header}>
      {/* Promo bar */}
      <div className={styles.headerTop}>
        <p>Check out our Black Friday offers →</p>
      </div>

      {/* Main header */}
      <div className={styles.headerMain}>
        <div className={styles.left}>
          <img src={logo} alt="Comfy Logo" className={styles.logo} />
          <div className={styles.menu}>
            <img src={menuIcon} alt="Menu" />
            <span>Menu</span>
          </div>
        </div>

        <div className={styles.search}>
            <input type="text" placeholder="Search" />
             <img src={searchIcon} alt="Search" />
        </div>

        <div className={styles.icons}>
  <Link to="/register">
    <img src={userIcon} alt="User" />
  </Link>
  <Link to="/wishlist">
    <img src={favouritesIcon} alt="Wishlist" />
  </Link>
  <Link to="/bag">
    <img src={cartIcon} alt="Cart" />
  </Link>
</div>
      </div>
    </header>
  );
}
