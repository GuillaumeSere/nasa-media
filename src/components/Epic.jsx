import React, { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../images/107321-rocket.json'

const Epic = () => {

    const [epic, setEpic] = useState(null)

    useEffect(() => {
        fetchPlanete()
        async function fetchPlanete() {
            const res = await fetch(
                `https://images-api.nasa.gov/search?q=apollo%2022`
            )
            const data = await res.json()
            setEpic(data)
        }
    }, [])

    if (!epic) return <div />

    return (
        <>
        <Player
        autoplay
        loop
        src={animation}
        style={{ height: '300px', width: '300px', paddingTop: '5rem', marginBottom: '-12rem', marginLeft: '10rem' }}
    >
    </Player>
        <div className='container-post'>
            {epic.collection.items.map((post, index) => {
                return (
                    <div className='epic-card' key={index}>
                        <div className='epic-title'>{post.data[0].title}</div>
                        <img className='epic-image' src={post.links[0].href} alt="" />
                        <div className='epic-description'>{post.data[0].description}</div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Epic
