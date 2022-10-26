import styles from '../../CardGame.module.scss'


const DifficultySelection = ({ setDifficulty, returnMenu }) => {
  return (
    <div className={styles.buttons}>
      <button className='py-3 bg-green-400 rounded text-xl w-36'
              onClick={() => setDifficulty(15)}>ИЗИ
      </button>
      <button className='py-3 bg-yellow-300 rounded text-xl w-36'
              onClick={() => setDifficulty(10)}>НОРМАЛ
      </button>
      <button className='py-3 bg-red-400 rounded text-xl w-36'
              onClick={() => setDifficulty(5)}>ХАРД
      </button>
      <button className='py-3 bg-red-700 rounded text-xl w-36 text-white'
              onClick={() => setDifficulty(3)}>АД
      </button>
      <button className='py-3 mt-5 bg-gray-300 rounded text-xl w-36' onClick={returnMenu}>Назад</button>
    </div>
  )
}

export default DifficultySelection