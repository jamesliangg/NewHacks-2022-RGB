import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png';
const Header = () => {
  return (
    <header>
    
    {/* <div className="container header__container">
    <h1>Rep Gym Bro</h1>
    </div> */}
    <div className="header_logo">
    <img src={logo} class="logo" alt="Logo isn't working" />
    </div>
    <div className="header_background">
    <h1 class="header_colour"></h1>
    </div>
    </header>
  )
}

export default Header
