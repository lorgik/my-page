import styles from './App.module.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Header />
        <Main />
      </div>
      
      <Footer />
    </div>
  )
}


export default App
