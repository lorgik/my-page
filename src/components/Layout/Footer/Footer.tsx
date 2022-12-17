import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.title}>My games</span>
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
          <li><NavLink to='/calculator' className={({ isActive }) => isActive ? styles.active : ''}><img
            className={styles.icon}
            src='https://cdn-icons-png.flaticon.com/512/891/891175.png'
            alt='calculator' />
          </NavLink></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer