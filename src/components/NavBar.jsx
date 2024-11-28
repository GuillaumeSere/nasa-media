import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import DayNightToggle from 'react-day-and-night-toggle'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../images/23661-nasa-logo.json'

const NavBar = () => {

    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('data-theme') === 'dark' ? true : false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? 'dark' : 'light'

        setIsDarkMode(newColorScheme === 'dark' ? true : false)
        localStorage.setItem('data-theme', newColorScheme)
        document.body.setAttribute('data-theme', localStorage.getItem('data-theme', 'dark'))
    })

    const handleChangeTheme = () => {
        setIsDarkMode(!isDarkMode)
        if (!isDarkMode) {
            localStorage.setItem('data-theme', 'dark')
            document.body.setAttribute('data-theme', 'dark')
        } else {
            localStorage.setItem('data-theme', 'light')
            document.body.setAttribute('data-theme', 'light')
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='navbar'>
            <div className='toggle-menu' onClick={toggleMenu}>
                <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                <Player
                    autoplay
                    loop
                    src={animation}
                    className='logo'
                    style={{ height: '80px', width: '100px', marginTop: '-2.5rem', zIndex:'1000'}}
                >
                </Player>
            </div>
            <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <Link className='nav-link' to="/">ACCUEIL</Link>
                <Link className='nav-link' to="/curiosity">CURIOSITY</Link>
                <Link className='nav-link' to="/asteroide">ASTEROÏDES</Link>
                <Link className='nav-link' to="/epic">PHOTOS NASA</Link>
                <Link className='nav-link' to="/recherche">RECHERCHE</Link>
                <DayNightToggle
                    onChange={handleChangeTheme}
                    checked={isDarkMode}
                    className="toggle-theme"
                    size= "15"
                />
            </div>
        </div>
    )
}

export default NavBar
