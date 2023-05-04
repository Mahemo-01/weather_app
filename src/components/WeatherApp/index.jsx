import { useEffect, useState } from "react"
import { WeatherForm } from '../WeatherForm'
import { WeatherInfo } from '../WeatherInfo'
import { Loading } from '../Loading'

import styles from "./weatherApp.module.css"

export function WeatherApp() {
  const [weather, setWeather] = useState(null)

  // useEffect(() => {
  //   loadInfo()
  // }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])

  async function loadInfo(city = 'London') {
    const url = import.meta.env.VITE_REACT_APP_URL
    const key = import.meta.env.VITE_REACT_APP_KEY

    try {
      const request = await fetch(`${url}&key=${key}&q=${city}`)
      const result = await request.json()

      console.log('Estoy antes del if:', weather)

      if (result.error) {
        setWeather(null)
        return null
      }

      console.log('Estoy despues del if:', weather)
      setTimeout(() => {
        setWeather(result)
      }, 1000)

    } catch (e) {
      return {
        ok: false,
        error: e.message
      }
    }
  }

  function handleChangeCity(city) {
    console.log('Estoy en handleChange:', weather)
    setWeather(null)
    loadInfo(city)
  }

  return (
    <div className={`${styles.container} ${weather ? styles.containerOpen : styles.containerClose}`}>
      <WeatherForm onChangeCity={handleChangeCity}></WeatherForm>
      {/* {weather ? <WeatherInfo weather={weather} /> : <Loading />} */}
      {weather ? <WeatherInfo weather={weather} /> : null}
    </div>
  )
}