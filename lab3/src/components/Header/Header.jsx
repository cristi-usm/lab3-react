import styles from "./Header.module.css";
import { Button } from "@components/Button";
import data from "@data/navigation.json";
import logo from "@assets/logo.svg";

export function Header({navigate}) {
    return (
        <header className={styles.header}>
            <div className={styles.nav_bar}>
                <img src={logo} alt="house logo" />
                <ul>
                    {data.navLinks.map((link) => (
                        <li key={link.id}>
                            <button onClick={() => navigate(link.path)}>
                                {link.label}
                                {link.dropdown && <span>▾</span>}
                            </button>
                        </li>
                    ))}
                </ul>
                <Button label="GET STARTED" variant="primary" onClick={() => navigate("contact")}></Button>
                <div className={styles.hamburger}></div>
            </div>
        </header>
    )
}