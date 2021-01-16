import React, { useState } from 'react';
import Styles from './styles/SearchBar.module.css'

export default function SearchBar(props) {
  
  const [cityName, setCityName] = useState('');

  let handleChange = (e) =>{
    setCityName(e.target.value)
  }
  
  return (
    <div>
      <nav className={Styles.navBar}>
        <form 
        onSubmit={(e)=>{
          e.preventDefault();
          props.onSearch(cityName);
          setCityName('');
        }}
          
        className={Styles.searchForm}
        >
          <input 
          type='text' 
          placeholder="Ciudad..."
          value={cityName} 
          id = 'desireCity' 
          onChange ={handleChange}
          className={Styles.searchInput}></input>
          <button className={Styles.searchButton}>Buscar</button>
        </form> 
      </nav>
    </div>
    
    )
};