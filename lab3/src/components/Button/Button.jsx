import styles from "./Button.module.css";

export function Button( {label, onClick, variant = "primary"}) {
    return (
        <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;