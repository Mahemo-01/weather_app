import { useEffect, useState } from "react"
import { WeatherForm } from '../WeatherForm'
import { WeatherInfo } from '../WeatherInfo'
import { Loading } from '../Loading'

import styles from "./weatherApp.module.css"

export function WeatherApp() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])

  async function loadInfo(city = 'London') {
    const url = import.meta.env.VITE_REACT_APP_URL
    const key = import.meta.env.VITE_REACT_APP_KEY

    try {
      const request = await fetch(`${url}&key=${key}&q=${city}`)
      const result = await request.json()

      if (result.error) {
        setWeather(null)
        return null
      }

      setTimeout(() => {
        setWeather(result)
      }, 2000)

    } catch (e) {
      return {
        ok: false,
        error: e.message
      }
    }
  }

  function handleChangeCity(city) {
    setWeather(null)
    loadInfo(city)
  }

  return (
    <div className={styles.container}>
      <WeatherForm onChangeCity={handleChangeCity}></WeatherForm>
      {weather ? <WeatherInfo weather={weather} /> : <Loading />}
    </div>
  )
}