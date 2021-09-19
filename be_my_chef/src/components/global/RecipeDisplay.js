
import React from 'react'
import '../../styles/recipe-display.css'
import { Link } from 'react-router-dom'

export default function RecipeDisplay(props) {
    const {image, title, missedIngredientsPrice, res} = props
    console.log(props)
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

