import React, { useEffect, useRef, useState } from 'react'

const stepDelay = 150
const fieldSize = 480
const creatureSize = 60
const fieldWithCreature = fieldSize - creatureSize

const img1 = new Image()
img1.src = 'https://cdn-icons-png.flaticon.com/512/2072/2072299.png'

const img2 = new Image()
img2.src = 'https://cdn-icons-png.flaticon.com/512/1791/1791327.png'

const SnakeGame = () => {
  const [snakePositionX, setSnakePositionX] = useState(0)
  const [snakePositionY, setSnakePositionY] = useState(0)
  const [snakeLength, setSnakeLength] = useState(0)
  
  const [foodPositionX, setFoodPositionX] = useState(0)
  const [foodPositionY, setFoodPositionY] = useState(0)
  
  const [direction, setDirection] = useState('right')
  const [start, setStart] = useState(false)
  
  const canvas = useRef<any>()
  
  
  function updateCanvas() {
    const context = canvas.current.getContext('2d')
    
    if (start) {
      context.clearRect(0, 0, fieldSize, fieldSize)
      
      if (snakePositionX === foodPositionX && snakePositionY === foodPositionY) {
        setFoodRandomPosition()
      }
      context.drawImage(img1, foodPositionX, foodPositionY, creatureSize, creatureSize)
      
      context.drawImage(img2, snakePositionX, snakePositionY, creatureSize, creatureSize)
      
      switch (direction) {
        case 'right':
          if (snakePositionX >= fieldWithCreature) {
            setSnakePositionX(0)
          } else {
            setSnakePositionX(prev => prev + creatureSize)
          }
          break
        
        case 'bottom':
          if (snakePositionY >= fieldWithCreature) {
            setSnakePositionY(0)
          } else {
            setSnakePositionY(prev => prev + creatureSize)
          }
          break
        
        case 'left':
          if (snakePositionX <= 0) {
            setSnakePositionX(fieldWithCreature)
            
          } else {
            setSnakePositionX(prev => prev - creatureSize)
          }
          break
        
        case 'top':
          if (snakePositionY <= 0) {
            setSnakePositionY(fieldWithCreature)
          } else {
            setSnakePositionY(prev => prev - creatureSize)
          }
          break
      }
      
      if (snakePositionX === foodPositionX && snakePositionY === foodPositionY) {
        setSnakeLength(prev => prev + 1)
        setFoodRandomPosition()
      }
    }
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      updateCanvas()
    }, stepDelay)
    return () => clearInterval(interval)
  }, [updateCanvas])
  
  const handleKeyDown = (event: any) => {
    switch (event.code) {
      case 'ArrowRight':
        setDirection('right')
        break
      case 'ArrowDown':
        setDirection('bottom')
        break
      case 'ArrowLeft':
        setDirection('left')
        break
      case 'ArrowUp':
        setDirection('top')
        break
      default:
        console.log(event.code)
    }
  }
  
  function generateRandomPosition() {
    return Math.floor(Math.random() * fieldWithCreature / creatureSize) * creatureSize
  }
  
  function setFoodRandomPosition() {
    setFoodPositionX(generateRandomPosition())
    setFoodPositionY(generateRandomPosition())
    if (snakePositionX === foodPositionX && snakePositionY === foodPositionY) {
      setFoodPositionX(generateRandomPosition())
      setFoodPositionY(generateRandomPosition())
    }
  }
  
  function focusCanvas() {
    canvas.current.focus()
  }
  
  useEffect(() => {
    focusCanvas()
    setFoodRandomPosition()
  }, [])
  
  function startGame() {
    if (!start) {
      setStart(true)
    }
  }
  
  function pauseGame() {
    setStart(false)
  }
  
  
  return (
    <div onClick={focusCanvas} className='w-full mb-5 flex items-center justify-evenly z-10'>
      <canvas tabIndex={0} onKeyDown={handleKeyDown} className='bg-gray-200 border-gray-900 outline-none'
              ref={canvas}
              width={fieldSize} height={fieldSize} />
      <p className='max-w-[270px] w-full text-3xl bg-white px-4 py-3 rounded-lg flex justify-between'>
        Съедено:
        <span className='text-4xl font-bold'>{snakeLength}&#127757;</span>
      </p>
      <div className='flex gap-2'>
        {start
          ?
          <button className='bg-yellow-400 px-4 py-2 rounded outline-0 min-w-[80px]' onClick={pauseGame}>Пауза</button>
          : <button className='bg-emerald-400 px-4 py-2 rounded outline-0 min-w-[80px]'
                    onClick={startGame}>Старт</button>
        }
      </div>
    </div>
  )
}

export default SnakeGame