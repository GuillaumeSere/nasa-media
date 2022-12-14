import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const NavBar = () => {
  return (
    <div className='navbar'>
        <Link className='nav-link' to="/">ACCUEIL</Link>
        <Link className='nav-link' to="/curiosity">CURIOSITY</Link>
        <Link className='nav-link' to="/asteroide">ASTEROÏDES</Link>
        <Link className='nav-link' to="/epic">PHOTOS NASA</Link>
        <img className='logo' src={logo} alt="logo" />
    </div>
  )
}

export default NavBar
