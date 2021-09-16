import React from 'react'
import Header from '../global/Header'
import '../../styles/homepage.css'

import {FaInstagram, FaGoogle, FaFacebookF} from 'react-icons/fa'

export default function HomePage() {
    fetch('https://api.spoonacular.com/recipes/637876/summary?apiKey=e17b28ec56034c8e82ed9212db2c5e55')
        .then(res => res.json())
        .then((result) => {
            console.log(result)
        })
    return (
        <div className='homepage-flex'>
            <Header />
            <img 
                src='https://i.imgur.com/fe3m6vx_d.webp?maxwidth=760&fidelity=grand'
                alt='icon'
                className='main-img'
            >
            </img>
            <h2 className='welcome-text'>WELCOME TO BE MY CHEF</h2>
            <h2 className='welcome-text'>PLEASE LOGIN</h2>

            <div className='login-row'>
                <FaInstagram size={70} className='login-icon'></FaInstagram>
                <FaGoogle size={70} className='login-icon'></FaGoogle>
                <FaFacebookF size={70} className='login-icon'></FaFacebookF>
            </div>
        </div>
    )
}
