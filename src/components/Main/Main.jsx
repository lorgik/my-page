import styles from './Main.module.scss'


const Main = () => {
  return (
    <main className={styles.main}>
      <section>
        <img src='https://kogdavyydet.ru/wp-content/uploads/2022/05/Shikimoris-Not-Just-a-Cutie.jpg' alt='anime'
             width='600' />
        <h2>Что у нас сегодня</h2>
        {/*<Quote />*/}
        <p>API не грузит :(</p>
      </section>
      <aside>
        <div>Затычка</div>
      </aside>
    </main>
  )
}

export default Main