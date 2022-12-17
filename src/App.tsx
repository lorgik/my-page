import { HashRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Main from './components/Main/Main'
import SnakeGame from './components/SnakeGame/SnakeGame'
import CardGame from './components/CardGame/CardGame'
import Calculator from './components/Calculator/Calculator'

import styles from './App.module.scss'


const App = () => {
  return (
    <HashRouter>
      <div className={styles.wrapper}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/card-game' element={<CardGame />} />
            <Route path='/snake-game' element={<SnakeGame />} />
            <Route path='/calculator' element={<Calculator />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
