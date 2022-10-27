import styles from './App.module.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from './components/Main/Main'
import SnakeGame from './components/SnakeGame/SnakeGame'
import CardGame from './components/CardGame/CardGame'


const App = () => {
  return (
    <HashRouter>
      <div className={styles.wrapper}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/snake-game' element={<SnakeGame />} />
            <Route path='/card-game' element={<CardGame />} />
            {/*<Route path='/todo-list' element={<ListTodo />} />*/}
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}


export default App