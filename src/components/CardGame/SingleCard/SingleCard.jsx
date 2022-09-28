import styles from './SingleCard.module.scss'

const imageDefaultUrl = 'https://cdn-icons-png.flaticon.com/512/3576/3576233.png'

const SingleCard = ({ card, handleChoice, flipped, disabled, isPair, isNotPair }) => {
  
  const handleClick = () => {
    if (!disabled && !flipped) {
      handleChoice(card)
    }
  }
  
  return (
    <div className={`${styles.card} ${isPair ? styles.right : ''} ${(isNotPair && flipped) ? styles.wrong : ''}`}
         key={card.id}
         onClick={handleClick}>
      <img
        className={`${styles.front} ${flipped ? styles.active : ''}`}
        src={imageDefaultUrl}
        alt='card front' width='70' />
      <img className={`${styles.back} ${flipped ? styles.active : ''}`} src={card.src}
           alt='card back'
           width='70' />
    </div>
  )
}

export default SingleCard