import Button from '@components/Button';
import styles from '@styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Coffee House</h1>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.text}>
          <h2>Enjoy Our Delicious Coffee</h2>
          <p>
            De la espresso intens până la latte cremos, fiecare ceașcă spune o poveste.
          </p>
          <Button text="View Menu" onClick={() => window.location.href='/menu'} />
        </div>
        <div className={styles.image}>
          <img src="/assets/cappuccino.jpg" alt="Cappuccino" />
        </div>
      </section>
    </div>
  );
}