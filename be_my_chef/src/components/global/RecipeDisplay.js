
import React from 'react'
import '../../styles/recipe-display.css'
export default function RecipeDisplay(props) {
    const {image, title, missedIngredientsPrice} = props
  return (
        <div className='recipe-display'>
                <img 
                    src={image}
                    alt='icon'
                />
            <div className='info-display'>
            <h2>{title}</h2>
            <p>Total price of missing ingredients: ${(missedIngredientsPrice/100).toFixed(2)}</p>
            </div>
        </div>
    )
}

