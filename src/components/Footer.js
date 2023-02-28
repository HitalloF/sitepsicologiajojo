import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.png'
import styles from './styles/Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.esquerda}>
        <div className={styles.esquerdaimg}>
      <img src={logo} />
        </div>
        <div className={styles.esquerdatxt}>
          <h1>ALGO SOBRE VOCÊ</h1>
          <p> eu odeio fazer sites, sim isso é fato<br/>
          mas foda-se por maconha vale tudo</p>
        </div>
      </div>
      <div className={styles.centro}>
        <div className={styles.centrotxt}>
          <h1>LINKS</h1>
          <ul>
            <li><NavLink>HOME</NavLink></li>
            <li><NavLink>SERVIÇOS</NavLink></li>
            <li><NavLink>PORTAL</NavLink></li>
          </ul>
        </div>
      </div>
      <div className={styles.direita}>
        <div className={styles.direitatxt}>
          <h1>CONTATO</h1>
          <p>Email: joelmydasmeninas@gmail.com</p>
          <p>number:81 9 96993369</p>
          <p>CRP: 666.69</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer