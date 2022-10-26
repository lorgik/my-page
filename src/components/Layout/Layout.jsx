import styles from './Layout.module.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.back}
           src='https://rozetked.me/images/uploads/BjnarZBIpbCO.jpg'
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