import styles from '../CardGame.module.scss'


const GameOver = ({ text, playAgain, returnMenu }) => {
  return (
    <div className={styles.modalWindow}>
      <p className='font-bold'>{text}</p>
      <div className={styles.menuSide}>
        <button className={styles.button} onClick={playAgain}>
          <img src='https://cdn-icons-png.flaticon.com/512/3106/3106716.png' alt='restart' width='30' />
        </button>
        <button className={styles.menuBtn} onClick={returnMenu}>
          <img src='https://cdn-icons-png.flaticon.com/512/659/659988.png'
               alt='menu' width='25' />
        </button>
      </div>
    </div>
  )
}

export default GameOver