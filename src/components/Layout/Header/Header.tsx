import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'


const Header = () => {
  
  return (
    <header className={styles.header}>
      <NavLink to='/'><img className={styles.logo} src='https://cdn-icons-png.flaticon.com/512/84/84653.png' alt='logo'
                           width='50' /></NavLink>
      <nav>
        <ul>
          {/*<li><NavLink to='/todo-list'>Дела</NavLink></li>*/}
          {/*<li><NavLink to='/'>Игра</NavLink></li>*/}
          {/*<li><NavLink to='/contacts'>Контакты</NavLink></li>*/}
        
        </ul>
        {/*<Weather />*/}
      </nav>
    </header>
  )
}

export default Header