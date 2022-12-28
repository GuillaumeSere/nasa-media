import React, { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../images/57190-spaceman-walking.json'

const Home = () => {

    const [exoplanetes, setExoplanetes] = useState(null)

    useEffect(() => {
        fetchPlanete()
        async function fetchPlanete() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
            )
            const data = await res.json()
            setExoplanetes(data)
        }
    }, [])

    if (!exoplanetes) return <div />

    return (
        <div className='container-post'>
            <div className="home-description">{exoplanetes.explanation}</div>
            <Player
                autoplay
                loop
                src={animation}
                style={{ height: '300px', width: '300px' }}
            >
            </Player>
            <div className='home-card'>
                <div className='home-title'>{exoplanetes.title}</div>
                <div className='home-date'>{exoplanetes.date}</div>
                <img className='home-image' src={exoplanetes.hdurl} alt="" />
            </div>
        </div>
    )
}

export default Home
