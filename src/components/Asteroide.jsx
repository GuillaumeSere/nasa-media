import React, { useEffect, useState } from 'react'

const Asteroide = () => {

    const [asteroide, setAsteroide] = useState(null)

    useEffect(() => {
        fetchPlanete()
        async function fetchPlanete() {
            const res = await fetch(
                ` https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.REACT_APP_API_KEY}`
            )
            const data = await res.json()
            setAsteroide(data)
        }
    }, [])

    if (!asteroide) return <div />

    return (
        <div className='container-post'>
            {asteroide.near_earth_objects.map((post, index) => {
                return (
                    <div className='asteroide-card' key={index}>
                        <div className='asteroide-name'>{post.name}</div>
                        <div className='asteroide-description'>Nom de l'asteroïde : {post.name_limited}</div>
                        <div className='asteroide-distance'>Distance de la lune : {post.close_approach_data[0].miss_distance.lunar}</div>
                        <div className='asteroide-designation'>Designation : {post.designation}</div>
                        <div className='atseroide-date'>Date d'approche : {post.close_approach_data[0].close_approach_date}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Asteroide
