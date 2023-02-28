import React from 'react'
import Header from './Header'
import styles from './styles/Home.module.css'
import background  from '../img/background.png'
import { NavLink } from 'react-router-dom'
import service from '../img/services.png'
import faq from '../img/faq.png'
import Footer from './Footer'
const Home = () => {
  return (
    <section>
      <Header />
      <section className={styles.espace}>

      </section>
      <div className={styles.wallpaper}>
      <img src={background} />
      </div>
      <section className={styles.espace2}>

</section>
      <div >
      <div className={styles.service}>
        <div className={styles.servicetxt}>
      <h1>SERVIÇOS</h1>
      <p>Confira nossos serviços e escolha aqueles que melhor atendem às suas necessidades.</p>
      <NavLink to='/produtos'>SERVIÇOS</NavLink>
        </div>
        <div className={styles.serviceImg}>
      <img src={service} />
        </div>
      </div>
    </div>
    <section className={styles.espace2}>

</section>
    <div className={styles.faq}>

        <div className={styles.faqtxt}>
      <h1>PERGUNTAS E DUVIDAS</h1>
      <p>Confira nossos serviços e escolha aqueles que melhor atendem às suas necessidades.</p>
        </div>
        <div className={styles.faqimg}>
        <img src={faq} />
        </div>

    </div>
    <section className={styles.espace2}>

</section>
        <div className={styles.blog}>

        <div className={styles.blogtxt}>
      <h1>BLOG</h1>
      <p>Confira nossos serviços e escolha aqueles que melhor atendem às suas necessidades.</p>
        </div>
        <div className={styles.blogimg}>
        <img src={faq} />
        </div>

    </div>
    <section className={styles.espace2}>

</section>
    <Footer/>
    </section>
  )
}

export default Home