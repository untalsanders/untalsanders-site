import { FC } from 'react'
import styles from '../styles/hero.project.module.css'

interface HeroProjectProps {
  title: string
  description: string
}

const HeroProject: FC<HeroProjectProps> = ({ title, description }) => {
  return (
    <div className={styles.HeroProject}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default HeroProject
