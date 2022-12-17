import { Outlet } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'

import bgImage from '../../assets/images/bg.jpg'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.back}
           src={bgImage}
           alt='bg' />
      <div className={styles.content}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout