import styles from './TeamCard.module.css'

export default function TeamCard({ member }) {
  const { name, role, experience, license, hours, image, bio } = member

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} className={styles.image} loading="lazy" />
        <div className={styles.overlay} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span>{experience}</span>
          </div>
          <div className={styles.stat}>
            <span>{license}</span>
          </div>
          <div className={styles.stat}>
            <span>{hours}</span>
          </div>
        </div>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  )
}
