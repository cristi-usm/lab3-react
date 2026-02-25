import styles from "./Nav.module.css";
import navLinks from "@data/navLinks.json";

function Nav({ currentRoute, navigate }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => navigate("home")}>
          CC<span className={styles.dot}>.</span>
        </button>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={currentRoute === link.id ? styles.active : styles.link}
              onClick={() => navigate(link.id)}
            >
              {link.label}
              {currentRoute === link.id && <span className={styles.activeLine} />}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
