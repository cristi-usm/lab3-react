import styles from './Features.module.css'

function Features({ beneficii }) {
  return (
    <section className={styles.sectiune}>
      <div className={styles.grila}>
        {beneficii.map((item) => (
          <div key={item.id} className={styles.card}>
            <span className={styles.icon}>{item.icon}</span>
            <h3 className={styles.titlu}>{item.titlu}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Features
