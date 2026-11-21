import styles from './ProjectCard.module.css'

export function ProjectCard({ project }) {
  return <article className={styles.card}><div className={styles.cardTop}><div className={`${styles.projectIcon} ${styles[project.color]}`}>✦</div><button className={styles.more} aria-label={`Opțiuni pentru ${project.name}`}>•••</button></div><h3>{project.name}</h3><p className={styles.category}>{project.category}</p><div className={styles.progressMeta}><span>Progres</span><strong>{project.progress}%</strong></div><div className={styles.progress}><span className={`${styles[project.color]}`} style={{ width: `${project.progress}%` }} /></div><div className={styles.cardBottom}><div className={styles.members}>{project.members.map((member, index) => <span key={member} style={{ zIndex: project.members.length - index }}>{member}</span>)}</div><small>⌁ {project.due}</small></div></article>
}
