import styles from './Button.module.css'

function Button({ text, variant = 'negru', onClick }) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
