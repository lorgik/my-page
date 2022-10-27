import styles from './ListTodo.module.scss'
import { useEffect, useState } from 'react'


const ListTodo = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState(() => {
    const saved: any = localStorage.getItem('todos')
    const initialState = JSON.parse(saved)
    return initialState || ''
  })
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  
  function addTodo(todoText: string) {
    setTodos([...todos, todoText])
    localStorage.setItem('todos', todos)
  }
  
  function deleteTodo(todoIndex: number) {
    const newTodos = todos.filter((_: any, index: number) => index !== todoIndex)
    setTodos(newTodos)
  }
  
  const submitHandler = (event: any) => {
    event.preventDefault()
    if (value && (value.trim() !== '')) {
      addTodo(value)
    }
    setValue('')
  }
  
  return (
    <div className={styles.todos}>
      <div className={styles.todo}>
        <h2>Список дел</h2>
        <form onSubmit={submitHandler}>
          <input type='text' placeholder='Напиши свою задачу' value={value}
                 onChange={(event) => setValue(event.target.value)} />
          <button className='bg-green-400'>Добавить</button>
        </form>
        <div className={styles.list}>
          {todos.map((todo: any, index: any) => (
            <p key={index}>{index + 1}. {todo}
              <span onClick={() => deleteTodo(index)}>&#215;</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListTodo