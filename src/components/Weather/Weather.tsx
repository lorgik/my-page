import React, { useEffect, useReducer } from 'react'
import styles from './Weather.module.scss'

// const apiKey = 'b5eea671891c44c6979162018221210'
// const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Kazan`

interface IState {
  location: string
  windSpeed: number
  temperature: number
  condition: {
    text: string
    icon: string
  }
}

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
  params: { lat: '55', lon: '49' },
  headers: {
    'X-RapidAPI-Key': '9144477f88msh07d290cf0e7de7dp107c90jsnac187822b6e6',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
}

// const options: any = {
//   method: 'GET',
//   mode: 'no-cors',
//   headers: {
//     'X-Yandex-API-Key': '95a4c2ee-c5a5-41ab-a2ef-411e3bbd1f10',
//     'Content-Type': 'application/json'
//   }
// }

interface IAction extends IState {
  type: string
}

const initialState: IState = {
  location: 'City',
  windSpeed: 0,
  temperature: 0,
  condition: {
    text: 'Состояние погоды',
    icon: ''
  }
}


function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'showWeather':
      return {
        ...state,
        location: action.location,
        windSpeed: action.windSpeed,
        temperature: action.temperature,
        condition: action.condition
      }
    default:
      return { ...state }
  }
}

// https://api.weather.yandex.ru/v2/forecast?lat=55.7887400&lon=49.1221400&lang=ru_RU&limit=1

const Weather = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  async function getWeather() {
    const response = await fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=55.78874&lon=49.12214&units=metric&lang=ru\n', options)
      .then(response => response.json())
    dispatch({
      type: 'showWeather',
      location: response.city_name,
      windSpeed: response.data[0].wind_spd,
      temperature: response.data[0].temp,
      condition: response.data[0].weather.description
    })
  }
  
  useEffect(() => {
    getWeather().then(r => r)
  }, [])
  
  return (
    <div className={styles.weather}>
      <div className={styles.card}>
        <h1 className={styles.title}>{state.location}</h1>
        {/*<div className={styles.wind}>*/}
        {/*  <p className={styles.description}>Скорость ветра: {state.windSpeed.toFixed()} м/с</p>*/}
        {/*  <div className='flex items-center gap-1'>*/}
        {/*    <span className={styles.text}>{state.condition.text}</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <p className={styles.degrees}>{state.temperature.toFixed()}℃</p>
      </div>
    </div>
  )
}

export default Weather