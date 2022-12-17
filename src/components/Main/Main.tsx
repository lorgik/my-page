import styles from './Main.module.scss'

const skills = [
  {
    src: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
    alt: 'html',
    percent: 80,
    bg: false
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
    alt: 'css',
    percent: 70,
    bg: false
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    alt: 'js',
    percent: 60,
    bg: false
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/512/753/753244.png',
    alt: 'react',
    percent: 50,
    bg: false
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
    alt: 'ts',
    percent: 40,
    bg: false
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    alt: 'figma',
    percent: 15,
    bg: true
  }
]


const Main = () => {
  return (
    <main className={styles.main}>
      <section>
        <img src='https://kogdavyydet.ru/wp-content/uploads/2022/05/Shikimoris-Not-Just-a-Cutie.jpg' alt='anime'
             width='600' />
        <h2>Hi! My name is Moonlight</h2>
        {/*<Quote />*/}
        <p>And this is my page</p>
      </section>
      <aside>
        {/*<ListTodo />*/}
        <div className={styles.skills}>
          <h3 className={styles.title}>My skills</h3>
          {skills.map(skill => (
            <div className={styles.skill}>
              <img className={skill.bg ? styles.img : ''} src={skill.src} alt={skill.alt} />
              <input className={styles.line} type='range' value={skill.percent} />
              <label className={styles.percent}>{skill.percent}<span>%</span></label>
            </div>
          ))}
        </div>
      </aside>
    </main>
  )
}

export default Main