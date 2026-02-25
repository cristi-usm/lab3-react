import styles from "./Button.module.css";

function Button({ text, onClick, variant = "primary", size = "md" }) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
