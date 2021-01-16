import React from 'react';
import {Link} from 'react-router-dom'
import toCelcius from './utils/utils.js'
import Styles from './styles/Card.module.css'

export default function Card(props) {
  // acá va tu código 
  return (
    <div className={Styles.card}>
      <div className={Styles.titlecont}>
        <Link to={`/ciudad/${props.id}`}>
          <h2 className={Styles.title}> {props.name}</h2>
        </Link>
        <button className={Styles.closeButton} onClick = {() => props.onClose(props.id)}>x</button>
      </div>
      <div className={Styles.container}>
        <div className={Styles.tempDisplay} >
          <span className={Styles.tempeTitle}>min</span>
          <span className={Styles.temperature}>{toCelcius(props.min)}</span>
        </div>    
        <div className={Styles.tempDisplay}>
          <span className={Styles.tempeTitle}>max</span>
          <span className={Styles.temperature}>{toCelcius(props.min)}</span>
        </div>
        {/* <img src={'http://openweathermap.org/img/wn/' + props.img + '@2x.png'} alt='wheater icon'></img>  */}
        <img className={Styles.weatherIco}src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='wheater icon'></img> 
      </div>
    </div>)
};