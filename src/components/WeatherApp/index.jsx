// import styles from "./{componente}.module.css"
import { WeatherForm } from '../WeatherForm'
import { useState } from "react"


export function WeatherApp() {
  const [weather, setWeather] = useState(null)

  async function loadInfo(city = 'London') {
    const url = import.meta.env.VITE_REACT_APP_URL
    const key = import.meta.env.VITE_REACT_APP_KEY

    try {
      const request = await fetch(`${url}&key=${key}&q=${city}`)
      const result = await request.json()

      console.log('valor json:', result)

      setWeather(result)

      console.log('valor despues del set', weather.current)


    } catch (error) { }
    console.log(weather.current)
  }

  function handleChangeCity(city) {
    setWeather(null)
    loadInfo(city)
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity}></WeatherForm>
      <div>hola</div>
      <div> {weather?.current.temp_c} </div>
    </div>
  )
}