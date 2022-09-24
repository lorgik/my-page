import styles from './ListTodo.module.scss'
import { useEffect, useState } from 'react'


const ListTodo = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    const initialState = JSON.parse(saved)
    return initialState || ''
  })
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  
  function addTodo(todoText) {
    setTodos([...todos, todoText])
    localStorage.setItem('todos', todos)
  }
  
  function deleteTodo(todoIndex) {
    const newTodos = todos.filter((_, index) => index !== todoIndex)
    setTodos(newTodos)
  }
  
  const submitHandler = (event) => {
    event.preventDefault()
    if (value && (value.trim() !== '')) {
      addTodo(value)
    }
    setValue('')
  }
  
  return (
    <div className={styles.todos}>
      <div className={styles.todo}>
        <h2>Todo list</h2>
        <form onSubmit={submitHandler}>
          <input type='text' placeholder='Напиши свою задачу' value={value}
                 onChange={(event) => setValue(event.target.value)} />
          <button>Добавить</button>
        </form>
        <div className={styles.list}>
          {todos.map((todo, index) => (
            <p>{index + 1}. {todo}
              <span onClick={() => deleteTodo(index)}>&#10008;</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListTodo