import styles from './Layout.module.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.back}
           src='https://uce46ffa842442163aaaa8e483b3.previews.dropboxusercontent.com/p/thumb/ABuH287iZBBD1L9WsqatxZWZ3EdMIWZmG6ruk3s41qufEDx8dQZxBO-WsxM7GGrmeB-ftYaxlfaywajzePmjoL4pmwFX2XGUP37PooV3ejLrgqU6rt4y9KnUA4Sn1zG6uNGHkFGOpuBYYvwVakurK6e0hqGD8v1DQs--xYo__AKrblmBQWQgolOmSE8nNBZ3R0hFZvoho2QqBsjAbrMnTyWAPBR6dl85bFeOSXgZr17eFfLYIe2zpNY5zWVLCTJWmlF-UgMYdVgFg_OA_KCw-4hGM6MHBG5WbSfUqQe5WdvL-NKvDo9yC0PNGoPUP4F8H9an5zY7IFMXaCrnKmoV-jzR7MJ38SWpR8MA_KFLph3pf9nbh2N6NdXbrqDGk0e_lwBsfWeaRv5KxVJb1mIqee4JsFRGCTg6KkRnOxEKB2xv5KLMjmuhn8dL3PCvbv8QhCBAyPwytPES_G62YHqyK8maOhQVltoKfcHQlAg67Y_0F6BwomWaBP_Jm1qp6anHmbjz4BYeD1pK6OOdiCc3qVThQBGhQDDwmkZGHVR-rZvig8Xhpb8gfMJGHNpBjrik4uGgFGSVHc0vzskJvo8mnei5fWFeUV61zUkladfXD-QkdXs_8aLmJm7zTkvFjbzTHYG3md9OM-j6Ixo4Zc8uEkU4dYQ3lpXdmWWQMavsU_14e96MsdWrNcnm5-JAe3Wr8PYHJAve0awFwOijdETDwZWvNs1gPVJ5ThuVXYAAbBycXZSq11edpnSYyhU0_bZeKywUgkbwF9RLYECqmAwBhlxU4FRumC64hobeyVFR0acVDyVT1-QVNlpn9IzEwQ75WSJ5SsND_sL_oR4pvfKOR1oM/p.png'
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