import React from 'react'
import '../../styles/main-header.css'
import { Link } from 'react-router-dom'

export default function MainHeader() {
    return (
        <div className='header-div'> 
            <Link to='/'>
            <img src='https://i.imgur.com/fe3m6vx_d.webp?maxwidth=760&fidelity=grand' alt='icon'>
            </img>
            </Link>
            <Link className='header-btn' to='/profile'>
                <h2>My</h2>
                <h2>Profile</h2>
            </Link>
            <Link className='header-btn' to='/recipes'>
                <h2>Find</h2>
                <h2>Recipes</h2>
            </Link>
            <Link className='header-btn' to='/guild'>
                <h2>My</h2>
                <h2>Guild</h2>
            </Link>
        </div>
    )
}
