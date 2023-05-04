import styles from "./weatherInfo.module.css"
import imagen from '../../assets/img/snow.png'
import { FaWater, FaWind } from "react-icons/fa"




export function WeatherInfo({ weather }) {
  return (
    <div className={styles.card}>

      <div className={styles.weatherBox}>
        <img
          src={imagen}
          // src={`http:${weather?.current.condition.icon}`}
          alt={weather?.current.condition.text} />

        <div className={styles.temperature}>{weather?.current.temp_c}</div>
        <div className={styles.details}>{weather?.current.condition.text}</div>
      </div>

      <div className={styles.weatherDetails}>
        <div className={styles.stats}>
          <FaWater></FaWater>

          <div>
            <span>{weather?.current.humidity}%</span>
            <p>Humidity</p>
          </div>
        </div>

        <div className={styles.stats}>
          <FaWind></FaWind>

          <div>
            <span>{weather?.current.wind_kph} Km/h</span>
            <p>Wind Speed</p>
          </div>
        </div>

      </div>

      {/* <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20293.936371054653!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1683166369388!5m2!1ses-419!2smx`}
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe> */}

    </div>
  )
}