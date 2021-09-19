
import React from 'react'

export default function RecipeDisplay(props) {
    const {recipe} = props
  return (
        <div>
            <div style={{float: 'left', position: 'relative', width: '25%'}}>
                <img 
                    src={recipe.image}
                    alt='icon'
                    align='left'
                />
            </div>
            <div style={{float: 'left', position: 'relative', width: '75%'}}>
            <h2>{recipe.title}</h2>
            <p>Total price of missing ingredients: {recipe.missedIngredientsPrice} cents</p>
            </div>
        </div>
    )
}

