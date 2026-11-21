import styles from './Header.module.css'

export function Header({ search, onSearch, onMenu }) {
  return <header className={styles.header}>
    <button className={styles.mobileMenu} aria-label="Deschide meniul" onClick={onMenu}>☰</button>
    <label className={styles.search}><span>⌕</span><input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Caută proiecte..." /></label>
    <div className={styles.actions}><button className={styles.notification} aria-label="Notificări">♢<i /></button><div className={styles.avatar}>MI</div><div className={styles.user}><strong>Mihai Ceban</strong><span>Administrator</span></div><span className={styles.chevron}>⌄</span></div>
  </header>
}
