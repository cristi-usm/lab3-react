import styles from './BenefitCard.module.css';

export default function BenefitCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
