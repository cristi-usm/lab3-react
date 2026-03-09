import styles from './Footer.module.css'

function Footer({ navigheaza, ROUTES }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.rand}>

      
        <div className={styles.linkuri}>
          <button onClick={() => navigheaza(ROUTES.EARRINGS)}>Cercei</button>
          <button onClick={() => navigheaza(ROUTES.RINGS)}>Inele</button>
          <button>Coliere</button>
          <button>Bratari</button>
        </div>

      
        <button className={styles.logo} onClick={() => navigheaza(ROUTES.HOME)}>
          Swarovski
        </button>

    
        <span className={styles.telefon}>+37300000000</span>

      </div>

      <p className={styles.copyright}>
        ©Swarovski 2026. Toate drepturile sunt rezervate
      </p>
    </footer>
  )
}

export default Footer
