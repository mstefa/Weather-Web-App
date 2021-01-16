import React from 'react';
import { NavLink} from 'react-router-dom'
import Styles from './styles/Nav.module.css'
import logo from '../logo.png'
import SearchBar from './SearchBar.jsx'

export default function Nav(props) {
  return (
      <nav className={Styles.navBar}>
          <div className={Styles.imgContainer}>
          <NavLink to= '/'>
            <img src ={logo} alt='logo MS' className={Styles.img}></img>
          </NavLink>
          </div>
          <div className={Styles.textContainer}>
            <NavLink to= '/'>
              <span className={Styles.span}> Wheather Simple APP</span>
            </NavLink>
            <NavLink to= '/about'>
              <span>About</span>
            </NavLink>
          </div>
        <SearchBar onSearch ={props.onSearch}/>
      </nav>
  )
};