import React, { useEffect, useState } from 'react'

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
            console.log(data)
        }
    }, [])

    if (!exoplanetes) return <div />

    return (
        <div className='container-post'>
            <div className="home-description">{exoplanetes.explanation}</div>
            <div className='home-card'>
                <div className='home-title'>{exoplanetes.title}</div>
                <div className='home-date'>{exoplanetes.date}</div>
                <img className='home-image' src={exoplanetes.hdurl} alt="" />
            </div>
        </div>
    )
}

export default Home
