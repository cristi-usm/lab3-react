import { useState } from 'react'
import styles from './Navbar.module.css'

import iconUser from '@assets/icon/circle-user_9821720.png'
import iconCart from '@assets/icon/shopping-cart-favourite_19027127.png'

function Navbar({ navigheaza, pagina, ROUTES }) {
  const [menuDeschis, setMenuDeschis] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.interior}>

        <ul className={`${styles.linkuri} ${menuDeschis ? styles.deschis : ''}`}>
          <li>
            <button
              onClick={() => navigheaza(ROUTES.HOME)}
              className={pagina === ROUTES.HOME ? styles.activ : ''}
            >
              Acasa
            </button>
          </li>
          <li>
            <button
              onClick={() => navigheaza(ROUTES.RINGS)}
              className={pagina === ROUTES.RINGS ? styles.activ : ''}
            >
              Inele
            </button>
          </li>
          <li>
            <button
              onClick={() => navigheaza(ROUTES.EARRINGS)}
              className={pagina === ROUTES.EARRINGS ? styles.activ : ''}
            >
              Cercei
            </button>
          </li>
          <li><button>Aur</button></li>
          <li><button>Argint</button></li>
        </ul>

    
        <button className={styles.logo} onClick={() => navigheaza(ROUTES.HOME)}>
          Swarovski
        </button>

        <div className={styles.iconite}>
          <button title="Cont">
            <img src={iconUser} alt="Cont" className={styles.icon} />
          </button>
          <button title="Cos">
            <img src={iconCart} alt="Cos" className={styles.icon} />
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuDeschis(!menuDeschis)}
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
