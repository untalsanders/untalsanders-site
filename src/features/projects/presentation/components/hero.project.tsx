import React from 'react'

interface HeroProjectProps {
  title: string
  description: string
}

const HeroProject: React.FC<HeroProjectProps> = ({ title, description }) => {
  return (
    <div className="hero-project">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default HeroProject
