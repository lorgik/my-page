import styles from './App.module.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import CardGame from './components/CardGame/CardGame'
import Layout from './components/Layout/Layout'
import ListTodo from './components/TodoList/ListTodo'


const App = () => {
  return (
    <HashRouter>
      <div className={styles.wrapper}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<CardGame />} />
            <Route path='/todo-list' element={<ListTodo />} />
            {/*<Route path='/game' element={<Main />} />*/}
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}


export default App
