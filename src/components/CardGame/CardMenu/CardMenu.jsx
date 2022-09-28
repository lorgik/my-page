import styles from '../CardGame.module.scss'

const ARCADE_MOD = 'arcade'
const SURVIVAL_MOD = 'survival'

const CardMenu = ({ shuffleCards, setGameMode, setStartGame, setLife }) => {
  return (
    <div className={styles.gameModes}>
      <span className={styles.mode}>Режим</span>
      <div className={styles.modeButtons}>
        <button className='py-4 px-14 bg-blue-400 rounded text-2xl w-64'
                onClick={() => {
                  shuffleCards()
                  setGameMode(ARCADE_MOD)
                  setStartGame(true)
                }}>АРКАДА
        </button>
        <button className='py-4 px-10 bg-violet-400 rounded text-2xl w-64'
                onClick={() => {
                  setLife(100)
                  setGameMode(SURVIVAL_MOD)
                }}>ВЫЖИВАНИЕ
        </button>
      </div>
    </div>
  )
}

export default CardMenu