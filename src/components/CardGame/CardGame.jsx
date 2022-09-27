import styles from './CardGame.module.scss'
import { useEffect, useState } from 'react'
import SingleCard from '../SingleCard/SingleCard'

const ARCADE_MOD = 'arcade'
const SURVIVAL_MOD = 'survival'

const cardImages = [
  { 'src': 'https://cdn-icons-png.flaticon.com/512/3145/3145160.png', matched: false },
  { 'src': 'https://cdn-icons-png.flaticon.com/512/3145/3145118.png', matched: false },
  { 'src': 'https://cdn-icons-png.flaticon.com/512/3145/3145106.png', matched: false },
  { 'src': 'https://cdn-icons-png.flaticon.com/512/3145/3145133.png', matched: false },
  { 'src': 'https://cdn-icons-png.flaticon.com/512/3145/3145148.png', matched: false },
  { 'src': 'https://cdn-icons-png.flaticon.com/512/3145/3145120.png', matched: false },
  { 'src': 'https://cdn-icons-png.flaticon.com/512/3145/3145110.png', matched: false },
  { 'src': 'https://cdn-icons-png.flaticon.com/512/3145/3145115.png', matched: false }
]

const heart = { 'src': 'https://cdn-icons-png.flaticon.com/512/3939/3939823.png' }


const CardGame = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [openPairs, setOpenPairs] = useState(0)
  const [life, setLife] = useState(-1)
  const [hearts, setHearts] = useState([])
  const [startGame, setStartGame] = useState(false)
  const [gameMode, setGameMode] = useState('')
  
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random()
      }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
    setStartGame(false)
    setGameMode('')
    setOpenPairs(0)
  }
  
  const showHearts = () => {
    const heartsArray = []
    for (let i = 0; i < life; i++) {
      heartsArray.push(heart)
    }
    setHearts(heartsArray)
  }
  
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        setOpenPairs(prev => prev + 1)
        resetTurn()
      } else {
        setTimeout(() => {
          resetTurn()
          if (life !== -1) {
            setLife(prev => prev - 1)
          }
        }, 1000)
      }
    }
  }, [choiceOne, choiceTwo])
  
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  
  useEffect(() => {
    shuffleCards()
  }, [])
  
  const handleClickEasy = (value) => {
    setLife(15)
    setStartGame(true)
    console.log(value)
  }
  
  const handleClickMedium = () => {
    setLife(10)
    setStartGame(true)
  }
  
  const handleClickHard = () => {
    setLife(5)
    setStartGame(true)
  }
  
  const handleClickImpossible = () => {
    setLife(3)
    setStartGame(true)
  }
  
  useEffect(() => {
    showHearts()
  }, [life])
  
  
  useEffect(() => {
    if (life === 0 || openPairs === 8) {
      setTimeout(() => {
        setGameMode('')
        setStartGame(false)
      }, 1000)
    }
  }, [life])
  
  const returnMenu = () => {
    shuffleCards()
    setLife(-1)
    setTurns(0)
    setOpenPairs(0)
  }
  
  return (
    <div className={styles.cardGame}>
      
      {gameMode === '' && !startGame ? <div className={`${styles.buttons} flex mt-10 gap-5 text-gray-800`}>
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
      </div> : ''}
      
      {gameMode === ARCADE_MOD ? <>
        {startGame ? <>
          <div className={styles.cards}>
            {cards.map(card => (
              <SingleCard key={card.id} card={card} handleChoice={handleChoice}
                          flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled}
                          isPair={card.matched} isNotPair={!card.matched && choiceOne && choiceTwo} />
            ))}
          </div>
        </> : ''}
      </> : <>
        {startGame ? <>
          <div className='mt-2 flex justify-between w-full items-center px-10'>
            <div className={`${styles.hearts} flex gap-1`}>
              {hearts.map((heart, index) => (
                <img alt='heart' key={index} src={heart.src} width='30' />
              ))}
            </div>
            <button className={`${styles.button} py-3 text-xl w-36`}
                    onClick={returnMenu}>Заново
            </button>
          </div>
          <div className={styles.cards}>
            {cards.map(card => (
              <SingleCard key={card.id} card={card} handleChoice={handleChoice}
                          flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled}
                          isPair={card.matched} isNotPair={!card.matched && choiceOne && choiceTwo} />
            ))}
          </div>
        </> : <>
          {life === 100 ? <>
            <button className='py-3 mt-5 bg-gray-400 rounded text-xl w-36' onClick={returnMenu}>Назад</button>
            <div className={`${styles.buttons} flex mt-10 gap-5 text-gray-800`}>
              <button className='py-3 bg-green-400 rounded text-xl w-36'
                      onClick={handleClickEasy}>ИЗИ
              </button>
              <button className='py-3 bg-yellow-300 rounded text-xl w-36' onClick={handleClickMedium}>НОРМАЛ
              </button>
              <button className='py-3 bg-red-400 rounded text-xl w-36' onClick={handleClickHard}>ХАРД</button>
              <button className='py-3 bg-red-700 rounded text-xl w-36 ' onClick={handleClickImpossible}>АД
              </button>
            </div>
          </> : ''}
        </>}
      </>}
      
      {((openPairs === 8) && (life === -1)) && <div className={styles.modalWindow}>
        <p className='font-bold'>Вы выиграли за {turns} ходов</p>
        <button className='bg-red-400 rounded-md py-2 px-4 '
                onClick={returnMenu}>Новая игра
        </button>
      </div>}
      {((openPairs === 8) && (life !== -1)) && <div className={styles.modalWindow}>
        <p className='font-bold'>Вы просто победитель по жизни!</p>
        <button className='bg-red-400 rounded-md py-2 px-4 '
                onClick={returnMenu}>Новая игра
        </button>
      </div>}
      {(life === 0) && <div className={styles.modalWindow}>
        <p className='font-bold'>Вы профукали! ХА ХА ХА</p>
        <button className='bg-red-400 rounded-md py-2 px-4 '
                onClick={returnMenu}>Новая игра
        </button>
      </div>}
    </div>
  )
}

export default CardGame