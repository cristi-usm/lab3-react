import styles from '@styles/Card.module.css';

export default function Card({ title, description, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}