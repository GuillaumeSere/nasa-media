import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import DayNightToggle from 'react-day-and-night-toggle'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../images/23661-nasa-logo.json'

const NavBar = () => {

    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('data-theme') === 'dark' ? true : false)

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? 'dark' : 'light'

        setIsDarkMode(newColorScheme === 'dark' ? true : false)
        localStorage.setItem('data-theme', newColorScheme)
        document.body.setAttribute('data-theme', localStorage.getItem('data-theme'))
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

    return (
        <div className='navbar'>
            <Link className='nav-link' to="/">ACCUEIL</Link>
            <Link className='nav-link' to="/curiosity">CURIOSITY</Link>
            <Link className='nav-link' to="/asteroide">ASTEROÏDES</Link>
            <Link className='nav-link' to="/epic">PHOTOS NASA</Link>
            <DayNightToggle
                onChange={handleChangeTheme}
                checked={isDarkMode}
                className="toggle-theme"
            />
            {/* { <img className='logo' src={logo} alt="logo" />} */}
            <Player
                autoplay
                loop
                src={animation}
                className='logo'
                style={{ height: '80px', width: '100px', marginTop: '-2.5rem'}}
            >
            </Player>
        </div>
    )
}

export default NavBar
