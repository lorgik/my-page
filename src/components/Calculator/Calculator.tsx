import styles from './Calculator.module.scss'
import { useState } from 'react'

const Calculator = () => {
  const [counts, setCounts] = useState('')
  const [result, setResult] = useState('')
  
  function Numbers() {
    const nums = Array.from(Array(10).keys()).map(
      number => <button className={styles.number} key={number}>{number}</button>
    )
    
    return (
      <div className={styles.box}>
        {nums}
      </div>
    )
  }
  
  return (
    <div className={styles.program}>
      <div className={styles.calculator}>
        <input className={styles.input} type='number' disabled={true} />
        <Numbers />
      </div>
    </div>
  )
}

export default Calculator