import styles from './Sidebar.module.css'

const menu = [{ id: 'dashboard', label: 'Dashboard', icon: '▦' }, { id: 'projects', label: 'Proiectele mele', icon: '◈' }, { id: 'tasks', label: 'Task-uri', icon: '☑' }, { id: 'calendar', label: 'Calendar', icon: '□' }]

export function Sidebar({ activePage, onNavigate }) {
  return <aside className={styles.sidebar}><div className={styles.brand}><span>✦</span> focusly</div><p className={styles.menuLabel}>MENIU PRINCIPAL</p><nav>{menu.map((item) => <button className={activePage === item.id ? styles.active : ''} key={item.id} onClick={() => onNavigate(item.id)}><span>{item.icon}</span>{item.label}</button>)}</nav><div className={styles.bottom}><button onClick={() => onNavigate('settings')}><span>⚙</span> Setări</button><div className={styles.help}><strong>Ai nevoie de ajutor?</strong><p>Răsfoiește ghidul nostru rapid.</p><button>Vezi ghidul →</button></div></div></aside>
}
