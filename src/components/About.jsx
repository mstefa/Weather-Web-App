import React from 'react'
import Styles from './styles/About.module.css'

export default function About() {
  return (
    <div className={Styles.container}>
      Hi! my name is Matias, and you can know more about me visiting my 
      <a href='https://www.linkedin.com/in/matiasstefanutti/'  target="blank" > LinkedIn  </a>  profile!
    </div>
  )
}
