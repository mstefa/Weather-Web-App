import React from 'react'
import Styles from './styles/City.module.css'
import toCelcius from './utils/utils.js'

export default function City({citydetail}) {
  if (citydetail){
    return (
      <div className={Styles.citycomponent}>
        <div className={Styles.container}>
          <h2 className={Styles.title}> {citydetail.name}</h2>
          <div className={Styles.maininfo}>
            <div>Temperatura: {toCelcius(citydetail.temp)} </div>
            <div>Clima: {citydetail.weather}</div>
            <div>Viento: {citydetail.wind} km/h</div>
            <div>Cantidad de nubes: {citydetail.clouds}</div>
          </div>
          <img src={`http://openweathermap.org/img/wn/${citydetail.img}@2x.png`} alt='wheater icon' className={Styles.img}></img>
          <div className={Styles.otherinfo}>
            <div>Latitud: {citydetail.latitud}º</div>
            <div>Longitud: {citydetail.longitud}º</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div> ningua ciudad fue elegida</div>
  )
}
