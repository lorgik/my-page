import { useEffect, useState } from 'react'
import styles from './Quote.modulde.scss'
import axios from 'axios'

const apiUrl = 'https://favqs.com/api/qotd'

const Quote = () => {
  const [quote, setQuote] = useState(null)
  
  useEffect(async () => {
    await axios.get(apiUrl).then((response) => {
      setQuote(response.data)
    })
  }, [])
  
  if (!quote) return null
  
  
  return (
    <p className={styles}>{quote.quote.body}</p>
  )
}

export default Quote