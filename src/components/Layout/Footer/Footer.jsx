import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.title}>Мои игры</span>
      <nav>
        <ul>
          <li><NavLink to='/card-game' className={({ isActive }) => isActive ? styles.active : ''}><img
            className={styles.icon}
            src='https://cdn-icons-png.flaticon.com/512/3813/3813720.png'
            alt='card-game' />
          </NavLink></li>
          <li><NavLink to='/snake-game' className={({ isActive }) => isActive ? styles.active : ''}><img
            className={styles.icon}
            src='https://cdn-icons-png.flaticon.com/512/1791/1791327.png'
            alt='world-eater' />
          </NavLink></li>
        
        </ul>
      </nav>
    </footer>
  )
}

export default Footer