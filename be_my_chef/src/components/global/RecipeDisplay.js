
import React,{useState, useEffect} from 'react'
import '../../styles/recipe-display.css'
import { Link } from 'react-router-dom'
import {recipeFromId} from '../../api'

export default function RecipeDisplay(props) {
    const [imageUrl, setImage] = useState(null)
    const {image, title, missedIngredientsPrice, res} = props
    console.log(props)
    console.log(missedIngredientsPrice)
    useEffect(async() => {
        let temp = await recipeFromId(res.id)
        setImage(temp.image)
    },[])
    if (missedIngredientsPrice){
        return (
            <Link className='recipe-display' to={'/recipes/'+res.id}>
                    <img 
                        src={image}
                        alt='icon'
                    />
                <div className='info-display'>
                <h2>{title}</h2>
                <p>Total price of missing ingredients: ${(missedIngredientsPrice/100).toFixed(2)}</p>
                </div>
            </Link>
        )
    }
    else {
        return (
            <Link className='recipe-display' to={'/recipes/'+res.id}>
                    <img 
                        src={imageUrl}
                        alt='icon'
                    />
                <div className='info-display'>
                <h2>{title}</h2>
                </div>
            </Link>
        )
    }
  
}

