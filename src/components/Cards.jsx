import React from 'react';
import Card from './Card.jsx'
import Styles from './styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  
  return (
    <div>
      <div className={Styles.container}>
        {props.cities && props.cities.map((city) =>(
          <Card 
            key = {city.id}
            id = {city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={props.onClose}
          />
          ) 
        )}
      </div>
    </div>
  )
};