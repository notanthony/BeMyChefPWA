import React, {useEffect, useState} from 'react'
import MainHeader from '../global/MainHeader'
import {recipeFromId} from '../../api'


export default function SingleRecipe(props) {
    const [ recipeInfo, setRecipeInfo ] = useState(null)

    useEffect( async () => {
        await recipeFromId(props.recipeId)
        .then(res => {
            console.log(res)
        })
    }, [])

    return (
        <div>
            <MainHeader />
            <div className='main-recipe-div'>
                <h1 className='main-header'>Recipe Name</h1>
                <img 
                    className='main-img'
                    src={''}
                    alt='recipe picture'
                >
                </img>
            </div>
        </div>
    )
}
