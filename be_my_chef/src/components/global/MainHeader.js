import React, {useState} from 'react'
import '../../styles/main-header.css'
import { Link, useHistory } from 'react-router-dom'

export default function MainHeader() {
    const [ btnVisibility, setBtnVisibility ] = useState(false)

    function toggleDropdown(){
        console.log('toggle')
        if (btnVisibility) setBtnVisibility(false)
        else setBtnVisibility(true)

    }

    function showDropdown(){
        console.log('aaa')
        setBtnVisibility(true)
    }

    function hideDropdown(){
        setBtnVisibility(false)
    }

    // document.addEventListener('click', (e) =>{
    //     if (btnVisibility && e.target.id !== 'dropdown'){
    //         setBtnVisibility(false)
    //     }
    // })

    const history = useHistory()

    return (
        <div className='header-div'> 
            <Link to='/tips' className='circle-link'>
            <img 
                className='header-img'
                src='https://cdn.discordapp.com/attachments/887007873803116589/888955830358143056/SmallLogo.png' 
                alt='icon'
            >
            </img>
            </Link>
            <Link className='header-btn' to='/profile'>
                <h2>My</h2>
                <h2>Profile</h2>
            </Link>
            {
                btnVisibility
                &&
                <div 
                    className='header-btn' 
                    onClick={() => {
                        hideDropdown()
                    }}
                    style={{background: 'turquoise', color: 'black'}}
                    id='dropdown'
                >
                    <h2>Find</h2>
                    <h2>Recipes</h2>

                    <div className='btn-dropdown' >
                        <p 
                            className='dropdown-btn'
                            onClick={() => {
                                history.push('/search')
                                hideDropdown()
                            }}
                        >
                                Search
                        </p>
                        <div className='dotted-bar'></div>
                        <p 
                            className='dropdown-btn'
                            onClick={() => {
                                history.push('/search2')
                                hideDropdown()
                            }}
                        >
                            Ingredient Search
                        </p>
                        <div className='dotted-bar'></div>
                        <p 
                            className='dropdown-btn'
                            onClick={() => {
                                history.push('/favorites')
                                hideDropdown()
                            }}

                        >
                            My Favorites
                        </p>
                    </div>

                    <div className='btn-dropdown-triangle'>

                    </div>

                </div>
            }
            {
                !btnVisibility
                &&
                <div 
                    className='header-btn' 
                    onClick={() => {
                        showDropdown()
                        console.log('showing')
                    }}
                    id='dropdown'
                >
                    <h2>Find</h2>
                    <h2>Recipes</h2>
                </div>
            }
            <Link className='header-btn' to='/guild'>
                <h2>My</h2>
                <h2>Guild</h2>
            </Link>
            <p style={{display: 'none'}}>btnVisibility</p>
        </div>
    )
}
