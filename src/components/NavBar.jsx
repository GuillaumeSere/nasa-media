import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import DayNightToggle from 'react-day-and-night-toggle';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../images/23661-nasa-logo.json';

const NavBar = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const defaultTheme = prefersDarkScheme.matches;

    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('data-theme') === 'dark' || defaultTheme
    );

    const handleChangeTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('data-theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        const newTheme = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('data-theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
    }, [isDarkMode]);

    return (
        <div className='navbar'>
            {/* Vos liens */}
            <DayNightToggle
                onChange={handleChangeTheme}
                checked={isDarkMode}
                className="toggle-theme"
                size={20}
            />
            <Player
                autoplay
                loop
                src={animation}
                className='logo'
                style={{ height: '80px', width: '100px', marginTop: '-2.5rem' }}
            />
        </div>
    );
};

export default NavBar;

