import styles from "./weatherForm.module.css"
import { useState } from "react"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"


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
    <form onSubmit={handleSubmit} className={styles.searchBox}>
      <div>
        <FaMapMarkerAlt></FaMapMarkerAlt>
      </div>

      <input type="text" onChange={handleOnChange} placeholder="search location" />

      <button>
        <FaSearch></FaSearch>
      </button>
    </form>
  )
}