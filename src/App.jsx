import { useRouter } from "@hooks/useRouter";
import Nav from "@components/Nav/Nav";
import Home from "@pages/Home/Home";
import About from "@pages/About/About";
import Contact from "@pages/Contact/Contact";
import navLinks from "@data/navLinks.json";
import styles from "./App.module.css";

function App() {
  const { currentRoute, navigate } = useRouter("home");

  function renderPage() {
    if (currentRoute === "home")    return <Home navigate={navigate} />;
    if (currentRoute === "about")   return <About navigate={navigate} />;
    if (currentRoute === "contact") return <Contact />;
    return <Home navigate={navigate} />;
  }

  return (
    <div className={styles.app}>
      <Nav currentRoute={currentRoute} navigate={navigate} />
      <main>{renderPage()}</main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerLogo}>CC<span>.</span></span>
          <p className={styles.footerText}>
            © 2024 Crudu Cristian · USM, Facultatea de Matematică și Informatică
          </p>
          <div className={styles.footerLinks}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={styles.footerLink}
                onClick={() => navigate(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
