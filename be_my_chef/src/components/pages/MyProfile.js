import React from 'react'
import '../../styles/homepage.css'


export default function MyProfile() {
    
    return (
        <div className='homepage-flex'>
            <h2 className='welcome-text'>J Y</h2>
            <img 
                src='https://i.imgur.com/fe3m6vx_d.webp?maxwidth=760&fidelity=grand'
                alt='user_pic'
                className='main-img'
            >
            </img>
            <h2 className='welcome-text'>J Y</h2>
            <p>I love to cook in my free time</p>
            <div>
            <h2 className='profile-text'>J LIKED RECIPES</h2>
            <img 
                src='https://i.imgur.com/fe3m6vx_d.webp?maxwidth=760&fidelity=grand'
                alt='recipe_pic'
                className='main-img'
            ></img>
            </div>
        </div>
    )
}