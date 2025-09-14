import styles from '../styles/posts.module.css'

type Props = {
  title: string
}

export function PostTitle({ title }: Props) {
  return <h1 className={styles.postTitle}>{title}</h1>
}
