import Button from '@components/Button'
import styles from './Hero.module.css'

function Hero({ onClick }) {
  return (
    <section className={styles.hero}>

      {}
      <img
        src="/src/assets/hero/hero-left.jpg"
        alt="Bijuterie"
        className={styles.imgStanga}
      />

      {}
      <div className={styles.text}>
        <span className={styles.subtitlu}>Eleganta. Acuratete. Stil.</span>
        <h1 className={styles.titlu}>
          Vrei sa fii cea mai<br />frumoasa si splendida
        </h1>
        <Button text="Vezi produsul" variant="negru" onClick={onClick} />
      </div>

      {}
      <img
        src="/src/assets/hero/hero-right.jpg"
        alt="Cercei"
        className={styles.imgDreapta}
      />

    </section>
  )
}

export default Hero
