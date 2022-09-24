import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src='https://cdn-icons-png.flaticon.com/512/84/84653.png' alt='logo' width='50' />
      <nav>
        <ul>
          <li><a href='#' className={styles.active}>Главная</a></li>
          <li><a href='#'>Кейсы</a></li>
          <li><a href='#'>Контакты</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header