import styles from "./Card.module.css";

function Card({ icon, title, desc }) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

export default Card;
