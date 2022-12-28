import React, { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../images/28514-mars-2020-nasa-mission.json'

const NasaPhoto = () => {

    const [photoData, setPhotoData] = useState(null)

    useEffect(() => {
        fetchPhoto()
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY}`
            )
            const data = await res.json()
            setPhotoData(data)
        }
    }, [])

    if (!photoData) return <div />

    return (
        <>
        <Player
        autoplay
        loop
        src={animation}
        className='curiosity'
        style={{ height: '400px', width: '400px', paddingTop: '5rem', marginBottom: '-14rem' }}
    >
    </Player>
        <div className='container-post'>
            {photoData.photos.map((post, index) => {
                return (
                    <div className='post-card' key={index}>
                        <span className='post-date'>Date: {post.earth_date}</span>
                        <div className='post-name'>Camera: {post.camera.full_name}</div>
                        <div className='post-rover'>Robot: {post.rover.name}</div>
                        <img className='post-image' src={post.img_src} alt="illustration" />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default NasaPhoto
