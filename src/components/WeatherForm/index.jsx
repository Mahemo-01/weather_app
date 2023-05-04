// import styles from "./{componente}.module.css"
import { useState } from "react"


export function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState('')

  function handleOnChange(e) {
    const value = e.target.value
    if (value !== '') {
      setCity(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!city || city.length <= 3) return null
    onChangeCity(city)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleOnChange} />
    </form>
  )
}