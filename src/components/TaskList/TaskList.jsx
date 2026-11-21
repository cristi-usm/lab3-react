import styles from './TaskList.module.css'

export function TaskList({ tasks, onToggle, onViewAll }) {
  return <section className={styles.panel}><div className={styles.heading}><div><h2>Task-uri de azi</h2><p>Nu lăsa nimic pe mâine.</p></div><button onClick={onViewAll}>•••</button></div><div className={styles.tasks}>{tasks.map((task) => <label className={styles.task} key={task.id}><input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} /><span className={styles.check} /><span className={styles.taskText}><strong className={task.completed ? styles.done : ''}>{task.title}</strong><small>{task.project}</small></span><time>{task.time}</time></label>)}</div><button className={styles.viewAll} onClick={onViewAll}>Vezi toate task-urile <span>→</span></button></section>
}
