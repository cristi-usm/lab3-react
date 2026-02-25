import styles from './Footer.module.css'

export default function Footer({ navigate }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <div>
                <div className={styles.brandName}>AERO TEAM</div>
                <span className={styles.brandSub}>Moldova</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Oferim experiențe de neuitat deasupra Moldovei. Zboruri sportive, salturi cu parașuta și cursuri PPL certificate EASA.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigare</h4>
            <ul className={styles.colList}>
              <li onClick={() => navigate('/')}>Acasă</li>
              <li onClick={() => navigate('/servicii')}>Servicii</li>
              <li onClick={() => navigate('/echipa')}>Echipa</li>
              <li onClick={() => navigate('/recenzii')}>Recenzii</li>
              <li onClick={() => navigate('/contact')}>Contact</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Servicii</h4>
            <ul className={styles.colList}>
              <li>Zbor cu Sting</li>
              <li>Zbor cu Cessna</li>
              <li>Salt cu Parașuta</li>
              <li>Cursuri PPL</li>
              <li>Cerere în Căsătorie</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactItem}>
              <span>Moldova, aerodromul Horesti</span>
            </div>
            <div className={styles.contactItem}>
              <a href="tel:+37376014777">+373 760 14 777</a>
            </div>
            <div className={styles.contactItem}>
              <span>info@aeroteam.md</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 <span className={styles.accentText}>Aero Team Moldova</span>. Toate drepturile rezervate.
          </p>
          <p className={styles.copyright}>
            Zburam tot anul.
          </p>
        </div>
      </div>
    </footer>
  )
}
