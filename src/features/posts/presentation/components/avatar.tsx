import styles from '@/styles/Blog.module.css'

type Props = {
  name: string
  picture: string
  className?: string
}

export function Avatar({ name, picture, className }: Props) {
  return (
    <div className={styles.avatar}>
      <img className={styles.avatar__image} src={picture} alt={name} width={40} height={40} />
      <span className={`${styles.avatar__name} ${className}`}>{name}</span>
    </div>
  )
}
