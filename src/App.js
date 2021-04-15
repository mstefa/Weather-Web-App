import React, { useState, useEffect  } from 'react';
import {Route} from 'react-router-dom'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import City from './components/City.jsx'
import About from './components/About.jsx'
// import apikey from './config.js'
import './App.css';

// console.log(process.env.REACT_APP_API)

export default function App() {

const [cities, setCities] = useState([]);

  let onSearch = (ciudad) =>{
    // API REQUEST
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_API}&units=metric`)
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

  useEffect( ()=>onSearch('buenos aires'),[]);

  // match.params.ciudadId

  return (
    <div className="App">
      <Route 
        path='/Weather-Web-App/'
        render={() =>   
          <Nav onSearch={onSearch} />
      }/>
      <Route 
        exact path='/Weather-Web-App/'
        render={() =>   
          <Cards cities={cities} onClose={onClose}/>
      }/>
      <Route
        path ='/Weather-Web-App/about'
        component={About}
      />
    <Route
      exact path='/Weather-Web-App/ciudad/:ciudadId'
      render ={({match}) => <City
          citydetail ={cities.find(element => element.id === parseInt(match.params.ciudadId))}
          // citydetail = {cities.filter(c => c.id === parseInt(match.params.ciudadId))}
        />}
  />
    </div>
  );
}
