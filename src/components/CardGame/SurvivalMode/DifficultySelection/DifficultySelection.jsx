import styles from '../../CardGame.module.scss'


const DifficultySelection = ({ setLife, setMaxLife, handleClickDifficult, returnMenu }) => {
  return (
    <div className={styles.buttons}>
      <button className='py-3 bg-green-400 rounded text-xl w-36'
              onClick={() => {
                setLife(15)
                setMaxLife(15)
                handleClickDifficult()
              }}>ИЗИ
      </button>
      <button className='py-3 bg-yellow-300 rounded text-xl w-36'
              onClick={() => {
                setLife(10)
                setMaxLife(10)
                handleClickDifficult()
              }}>НОРМАЛ
      </button>
      <button className='py-3 bg-red-400 rounded text-xl w-36'
              onClick={() => {
                setLife(5)
                setMaxLife(5)
                handleClickDifficult()
              }}>ХАРД
      </button>
      <button className='py-3 bg-red-700 rounded text-xl w-36 '
              onClick={() => {
                setLife(3)
                setMaxLife(3)
                handleClickDifficult()
              }}>АД
      </button>
      <button className='py-3 mt-5 bg-gray-400 rounded text-xl w-36' onClick={returnMenu}>Назад</button>
    </div>
  )
}

export default DifficultySelection