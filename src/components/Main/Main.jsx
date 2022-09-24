import styles from './Main.module.scss'
import ListTodo from '../TodoList/ListTodo'
import Quote from '../Quote/Quote'


const Main = () => {
  
  return (
    <main className={styles.main}>
      <section>
        <img src='https://kogdavyydet.ru/wp-content/uploads/2022/05/Shikimoris-Not-Just-a-Cutie.jpg' alt='anime'
             width='600' />
        <h2>Что у нас сегодня</h2>
        <Quote />
      </section>
      <aside>
        <ListTodo />
      </aside>
    </main>
  )
}

export default Main