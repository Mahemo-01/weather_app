// import styles from "./{componente}.module.css"
import { useEffect, useState } from "react"
import { WeatherForm } from '../WeatherForm'
import { WeatherInfo } from '../WeatherInfo'


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
      }, 100)

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
    <div>
      <WeatherForm onChangeCity={handleChangeCity}></WeatherForm>
      <WeatherInfo weather={weather}></WeatherInfo>
    </div>
  )
}