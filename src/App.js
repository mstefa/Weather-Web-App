import React, { useState, useEffect  } from 'react';
import {Route} from 'react-router-dom'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import City from './components/City.jsx'
import About from './components/About.jsx'
import apikey from './config.js'
import './App.css';

export default function App() {

const [cities, setCities] = useState([]);

  let onSearch = (ciudad) =>{
    // API REQUEST
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          !cities.some(element => element.id === ciudad.id) ?
      
            setCities(oldCities => [...oldCities, ciudad]) 
          :
            alert("Ciudad repetida");

        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  console.log(cities.find(element => element.id === 3435910))

  useEffect( ()=>onSearch('buenos aires'),[]);

  // match.params.ciudadId

  return (
    <div className="App">
      <Route 
        path='/'
        render={() =>   
          <Nav onSearch={onSearch} />
      }/>
      <Route 
        exact path='/'
        render={() =>   
          <Cards cities={cities} onClose={onClose}/>
      }/>
      <Route
        path ='/about'
        component={About}
      />
    <Route
      exact path='/ciudad/:ciudadId'
      render ={({match}) => <City
          citydetail ={cities.find(element => element.id === parseInt(match.params.ciudadId))}
          // citydetail = {cities.filter(c => c.id === parseInt(match.params.ciudadId))}
        />}
  />
    </div>
  );
}
