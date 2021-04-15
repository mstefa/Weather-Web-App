import React from 'react';
import { NavLink} from 'react-router-dom'
import Styles from './styles/Nav.module.css'
import logo from '../logo2.png'
import SearchBar from './SearchBar.jsx'

export default function Nav(props) {
  return (
      <nav className={Styles.navBar}>
          <div className={Styles.imgContainer}>
          <NavLink to= '/Weather-Web-App/'>
            <img src ={logo} alt='logo MS' className={Styles.img}></img>
          </NavLink>
          </div>
          <div className={Styles.textContainer}>
            <NavLink to= '/Weather-Web-App/'>
              <span className={Styles.span}> Wheather APP</span>
            </NavLink>
            <NavLink to= '/Weather-Web-App/about'>
              <span>About</span>
            </NavLink>
          </div>
        <SearchBar onSearch ={props.onSearch}/>
      </nav>
  )
};