import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  type = 'button',
  href,
  className = ''
}) {
  const classes = [
    styles.button,
    styles[variant],
    size === 'small' ? styles.small : '',
    size === 'large' ? styles.large : '',
    fullWidth ? styles.fullWidth : '',
    className
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
