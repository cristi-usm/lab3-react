import { useState } from 'react'
import styles from './Newsletter.module.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [trimis, setTrimis] = useState(false)

  function handleTrimite() {
    if (email.trim()) {
      setTrimis(true)
      setEmail('')
    }
  }

  return (
    <section className={styles.sectiune}>
      <div className={styles.continut}>
        <h2 className={styles.titlu}>Comanda acum accesorii unicale</h2>
        <p className={styles.subtitlu}>
          Aboneaza-te pentru oferte exclusive si noutati direct pe email.
        </p>

        {trimis ? (
          <p className={styles.succes}>✓ Multumim! Te-ai abonat.</p>
        ) : (
          <div className={styles.rand}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <button onClick={handleTrimite} className={styles.buton}>→</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Newsletter
