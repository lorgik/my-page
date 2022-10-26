import styles from './CardGame.module.scss'
import { useEffect, useState } from 'react'
import SingleCard from './SingleCard/SingleCard'
import CardMenu from './CardMenu/CardMenu'
import ArcadeMode from './ArcadeMode/ArcadeMode'
import SurvivalMode from './SurvivalMode/SurvivalMode'
import DifficultySelection from './SurvivalMode/DifficultySelection/DifficultySelection'
import GameOver from './GameOver/GameOver'

const ARCADE_MODE = 'arcade'
const SURVIVAL_MODE = 'survival'
const GAY_MODE = 'gay'

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
        setTimeout(() => {
          resetTurn()
        }, 500)
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
  
  const playAgainSurvival = () => {
    playAgain()
    setGameMode(SURVIVAL_MODE)
    setStartGame(true)
    setLife(maxLife)
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
  
  const setDifficulty = (life) => {
    setLife(life)
    setMaxLife(life)
    handleClickDifficult()
  }
  
  return (
    <div className={styles.cardGame}>
      {gameMode === '' && !startGame ?
        <CardMenu shuffleCards={shuffleCards} setGameMode={setGameMode}
                  setStartGame={setStartGame} setLife={setLife} />
        : ''
      }
      
      {(gameMode === ARCADE_MODE) && startGame ? <>
        <ArcadeMode playAgain={playAgain} returnMenu={returnMenu} turns={turns} />
        
        <div className={styles.cards}>
          {cards.map(card => (
            <SingleCard key={card.id} card={card} handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled}
                        isPair={card.matched} isNotPair={!card.matched && choiceOne && choiceTwo} />
          ))}
        </div>
      </> : ''}
      
      {(gameMode === SURVIVAL_MODE) && startGame ? <>
        <SurvivalMode returnMenu={returnMenu} playAgain={playAgainSurvival} hearts={hearts} />
        
        <div className={styles.cards}>
          {cards.map(card => (
            <SingleCard key={card.id} card={card} handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled}
                        isPair={card.matched} isNotPair={!card.matched && choiceOne && choiceTwo} />
          ))}
        </div>
      </> : <>
        {life === 100 ?
          <DifficultySelection returnMenu={returnMenu} setDifficulty={setDifficulty} />
          : ''}
      </>}
      
      {/*{(gameMode === GAY_MODE) && startGame ? <>*/}
      {/*    <h1 className='text-9xl bg-white py-10 px-20 rounded-xl w-full'>ТЫ ПИДОР</h1>*/}
      {/*  </>*/}
      {/*  : ''}*/}
      
      
      {
        ((openPairs === 8) && (life === -1)) &&
        <GameOver text={`Вы выиграли за ${turns} ходов`} returnMenu={returnMenu} playAgain={playAgain} />
      }
      
      {
        ((openPairs === 8) && (life !== -1)) && (maxLife === 15) &&
        <GameOver text={`Ты молодчина!!!`} returnMenu={returnMenu} playAgain={playAgainSurvival} />
      }
      
      {
        ((openPairs === 8) && (life !== -1)) && (maxLife === 10) &&
        <GameOver text={`А ты не так прост!!!`} returnMenu={returnMenu} playAgain={playAgainSurvival} />
      }
      
      {
        ((openPairs === 8) && (life !== -1)) && (maxLife === 5) &&
        <GameOver text={`Ты просто потрясен!!!`} returnMenu={returnMenu} playAgain={playAgainSurvival} />
      }
      
      {
        ((openPairs === 8) && (life !== -1)) && (maxLife === 3) &&
        <GameOver text={`Ты просто бог этой игры!!!`} returnMenu={returnMenu} playAgain={playAgainSurvival} />
      }
      
      {
        (life === 0) &&
        <GameOver text={`Вы профукали!!! ХА-ХА-ХА`} returnMenu={returnMenu} playAgain={playAgainSurvival} />
      }
    </div>
  )
}

export default CardGame