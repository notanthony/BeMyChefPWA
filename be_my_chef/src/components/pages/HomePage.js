import React from 'react'
import Header from '../global/Header'
import '../../styles/homepage.css'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import { Link, useHistory } from 'react-router-dom'
import {FaGoogle, FaFacebookF} from 'react-icons/fa'

export default function HomePage() {
    fetch('https://api.spoonacular.com/recipes/637876/summary?apiKey=e17b28ec56034c8e82ed9212db2c5e55')
        .then(res => res.json())
        .then((result) => {
            console.log(result)
        })
    const history = useHistory()
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
                <FacebookLogin
                appId="3092110447685911"
                onSuccess= {()=>  {
                    alert('success')
                    history.push('/survey')
                }}
                callback={null}
                render={renderProps => (
                    <FaFacebookF onClick={renderProps.onClick} size={70} className='login-icon'></FaFacebookF>
                )}
                />
                <GoogleLogin
                    clientId="975880535579-muq06b3jgeukrfi6f98jpuop1mm6h19v.apps.googleusercontent.com"
                    render={renderProps => (
                        <FaGoogle size={70} onClick={renderProps.onClick} className='login-icon'></FaGoogle>
                    )}
                    buttonText="Login"
                    onSuccess= {()=>  history.push('/survey')}
                    onFailure={null}
                    cookiePolicy={'single_host_origin'}
                />
                
                
            </div>
        </div>
    )
}
