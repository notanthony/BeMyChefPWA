import React from 'react'
import '../../styles/default.css'
import MainHeader from '../global/MainHeader'
import RecipesPage from './RecipesPage'

export default function MyProfile(props) {
    const { preferences } = props
    console.log(preferences)
    return (
        <div className='main-flex'>
            <MainHeader />
            <div className='scrollable-div'>
                <h1>Profile Name</h1>
                <img className='profile-img' alt='profile img' src='https://i.imgur.com/vzIo9qz.jpeg'>
                </img>
                <h3 className='profile-desc'>
                    I love to cook in my free time.<br/> My favorite foods are broccoli and cherries.
                </h3>
                <div className='favorites-div'>
                    <h1>Profile's Liked Recipes</h1>
                    <div className='recipes-display'>
                        <RecipesPage />
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}