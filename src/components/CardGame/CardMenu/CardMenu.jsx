import styles from '../CardGame.module.scss'

const ARCADE_MODE = 'arcade'
const SURVIVAL_MODE = 'survival'
const GAY_MODE = 'gay'

const CardMenu = ({ shuffleCards, setGameMode, setStartGame, setLife }) => {
  return (
    <div className={styles.gameModes}>
      <span className={styles.mode}>Режим</span>
      <div className={styles.modeButtons}>
        <button className='py-4 px-14 bg-blue-400 rounded text-2xl w-64'
                onClick={() => {
                  shuffleCards()
                  setGameMode(ARCADE_MODE)
                  setStartGame(true)
                }}>АРКАДА
        </button>
        <button className='py-4 px-10 bg-violet-400 rounded text-2xl w-64'
                onClick={() => {
                  setLife(100)
                  setGameMode(SURVIVAL_MODE)
                }}>ВЫЖИВАНИЕ
        </button>
        {/*<button className='py-4 px-10 bg-emerald-400 rounded text-2xl'*/}
        {/*        onClick={() => {*/}
        {/*          setGameMode(GAY_MODE)*/}
        {/*          setStartGame(true)*/}
        {/*        }}>Соревновательный*/}
        {/*</button>*/}
      </div>
    </div>
  )
}

export default CardMenu