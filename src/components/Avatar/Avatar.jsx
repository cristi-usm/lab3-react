import styles from "./Avatar.module.css";

function Avatar({ photo, name, title }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ring}>
        <img src={photo} alt={name} className={styles.img} />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Avatar;
