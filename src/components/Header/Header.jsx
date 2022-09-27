import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => isActive ? styles.active : ''


const Header = () => {
  
  return (
    <header className={styles.header}>
      <NavLink to='/'><img src='https://cdn-icons-png.flaticon.com/512/84/84653.png' alt='logo' width='50' /></NavLink>
      <nav>
        <ul>
          <li><NavLink className={setActive} to='/todo-list'>Дела</NavLink></li>
          <li><NavLink className={setActive} to='/game'>Игра</NavLink></li>
          {/*<li><NavLink className={setActive} to='/contacts'>Контакты</NavLink></li>*/}
        </ul>
      </nav>
    </header>
  )
}

export default Header