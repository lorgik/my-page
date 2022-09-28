import styles from './CardGame.module.scss'
import { useEffect, useState } from 'react'
import SingleCard from './SingleCard/SingleCard'

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
  const [maxLife, setMaxLife] = useState(0)
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
    setLife(-1)
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
  
  const handleClickDifficult = () => {
    setStartGame(true)
  }
  
  const playAgain = () => {
    const newShuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random()
      }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(newShuffledCards)
    setOpenPairs(0)
    setTurns(0)
  }
  
  useEffect(() => {
    showHearts()
  }, [life])
  
  
  useEffect(() => {
    if (life === 0 || openPairs === 8) {
      setStartGame(false)
      setTimeout(() => {
        setGameMode('')
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
      
      {gameMode === '' && !startGame ? <>
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
      </> : ''}
      
      {gameMode === ARCADE_MOD ? <>
        {startGame ? <>
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
            <div className={styles.menuSide}>
              <button className={styles.button}
                      onClick={() => {
                        playAgain()
                        setLife(maxLife)
                      }}>
                <img src='https://cdn-icons-png.flaticon.com/512/3106/3106716.png' alt='restart' width='30' />
              </button>
              <button className={styles.menuBtn} onClick={returnMenu}>
                <img src='https://cdn-icons-png.flaticon.com/512/659/659988.png'
                     alt='menu' width='25' />
              </button>
            </div>
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
          </> : ''}
        </>}
      </>}
      
      {((openPairs === 8) && (life === -1)) && <div className={styles.modalWindow}>
        <p className='font-bold'>Вы выиграли за {turns} ходов</p>
        <div className={styles.menuSide}>
          <button className={styles.button} onClick={playAgain}>
            <img src='https://cdn-icons-png.flaticon.com/512/3106/3106716.png' alt='restart' width='30' />
          </button>
          <button className={styles.menuBtn} onClick={returnMenu}>
            <img src='https://cdn-icons-png.flaticon.com/512/659/659988.png'
                 alt='menu' width='25' />
          </button>
        </div>
      </div>}
      {((openPairs === 8) && (life !== -1)) && <div className={styles.modalWindow}>
        <p className='font-bold'>Вы просто победитель по жизни!</p>
        <div className={styles.menuSide}>
          <button className={styles.button} onClick={() => {
            setGameMode(SURVIVAL_MOD)
            setStartGame(true)
            playAgain()
            setLife(maxLife)
          }}>
            <img src='https://cdn-icons-png.flaticon.com/512/3106/3106716.png' alt='restart' width='30' />
          </button>
          <button className={styles.menuBtn} onClick={returnMenu}>
            <img src='https://cdn-icons-png.flaticon.com/512/659/659988.png'
                 alt='menu' width='25' />
          </button>
        </div>
      </div>}
      {(life === 0) && <div className={styles.modalWindow}>
        <p className='font-bold'>Вы профукали! ХА ХА ХА</p>
        <div className={styles.menuSide}>
          <button className={styles.button} onClick={() => {
            setGameMode(SURVIVAL_MOD)
            setStartGame(true)
            playAgain()
            setLife(maxLife)
          }}>
            <img src='https://cdn-icons-png.flaticon.com/512/3106/3106716.png' alt='restart' width='30' />
          </button>
          <button className={styles.menuBtn} onClick={returnMenu}>
            <img src='https://cdn-icons-png.flaticon.com/512/659/659988.png'
                 alt='menu' width='25' />
          </button>
        </div>
      </div>}
    </div>
  )
}

export default CardGame