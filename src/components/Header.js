import React from 'react'
import styles from './styles/Header.module.css'
import {useLocation,NavLink} from 'react-router-dom'
import logo from '../img/logotop.png'
import instagram from '../img/icons/instagram.png'
import youtube from '../img/icons/youtube.png'
import facebook from '../img/icons/facebook.png'
const Header = () => {
  return (
    <section className={styles.nav}>
      
        <nav className={styles.boxnav}>
          <div>
        <img src={logo} />
          </div>
          <div className={styles.menu}>
            <ul className={styles.list}>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/produtos'>PRODUTOS</NavLink></li>
            <li><NavLink to='/'>PORTAL</NavLink></li>
            <NavLink target='_blank' to='https://www.instagram.com/joel_lins19/'><img src={instagram}  /></NavLink>
            <NavLink target='_blank' to='https://www.instagram.com/joel_lins19/'><img src={youtube}  /></NavLink>
            <NavLink target='_blank' to='https://www.instagram.com/joel_lins19/'><img src={facebook}  /></NavLink>
            </ul>
            </div>
        </nav>
    </section>
  )
}

export default Header