import styles from '../CardGame.module.scss'


const ArcadeMode = ({ turns, playAgain, returnMenu }) => {
  return (
    <div className='mt-2 flex justify-between w-full items-center px-10'>
      <div className={styles.yourTurns}>Ваши ходы: {turns}</div>
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

export default ArcadeMode