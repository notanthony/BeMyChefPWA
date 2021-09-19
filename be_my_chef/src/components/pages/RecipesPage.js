import React, {useState, useEffect} from 'react'
import { SnapShareButton } from '../global/Share';
import ShareButton from '../global/Share'
import {recipeFromId} from '../../api'
import MainHeader from '../global/MainHeader'
import '../../styles/recipe-display.css'


export default function RecipesPage(props) {
    const [ recipe, setRecipe ] = useState(null)
    const [ ingredientList, setIngredientList] = useState([])
    const [ instructions, setInstructions ] = useState([])

    useEffect( async () => {
        await recipeFromId(props.recipeId)
        .then(async (res) => {
            console.log(recipe)
            await setRecipe(res)
            
        })
        .then(() => {
            let tempArr = []
            console.log(recipe)
            if (!recipe || !recipe.extendedIngredients){
                setTimeout(() => {
                    for(var i of recipe.extendedIngredients) {
                        tempArr.push(i.original);
                    }
                    setIngredientList(tempArr)
                }, 1000)
            }
            else {
                for(var i of recipe.extendedIngredients) {
                    tempArr.push(i.original);
                }
                setIngredientList(tempArr)
            }
            
        })
        .then(() => {
            getInstructions()
        })
        

    }, [])

    


    function getInstructions(){
        let re = new RegExp("/</?[^/>]+(/>|$)/g")
        let arr = recipe.instructions.replace(/<[^>]*>?/gm, '').split('.')
        console.log(arr)
        arr.pop()
        setInstructions(arr)
        console.log(instructions)
        // fetch('https://api.spoonacular.com/recipes/analyzeInstructions?apiKey=1afbf3eddf2d44bab179cb3a31666387&instructions=' + recipe.instructions, {method: 'POST'})
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        //     // setInstructions(data.parsedInstructions[0].steps)
        // })
    }
    

    // instructions = {
    //     "parsedInstructions": [
    //         {
    //             "name": "",
    //             "steps": [
    //                 {
    //                     "number": 1,
    //                     "step": "Put the garlic in a pan and then add the onion.",
    //                     "ingredients": [
    //                         {
    //                             "id": 11215,
    //                             "name": "garlic",
    //                             "localizedName": "garlic",
    //                             "image": "garlic.png"
    //                         },
    //                         {
    //                             "id": 11282,
    //                             "name": "onion",
    //                             "localizedName": "onion",
    //                             "image": "brown-onion.png"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404645,
    //                             "name": "frying pan",
    //                             "localizedName": "frying pan",
    //                             "image": "pan.png"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "number": 2,
    //                     "step": "Add some salt and oregano.",
    //                     "ingredients": [
    //                         {
    //                             "id": 2027,
    //                             "name": "oregano",
    //                             "localizedName": "oregano",
    //                             "image": "oregano.jpg"
    //                         },
    //                         {
    //                             "id": 2047,
    //                             "name": "salt",
    //                             "localizedName": "salt",
    //                             "image": "salt.jpg"
    //                         }
    //                     ],
    //                     "equipment": []
    //                 }
    //             ]
    //         }
    //     ],
    //     "ingredients": [
    //         {
    //             "id": 2027,
    //             "name": "oregano"
    //         },
    //         {
    //             "id": 11215,
    //             "name": "garlic"
    //         },
    //         {
    //             "id": 11282,
    //             "name": "onion"
    //         },
    //         {
    //             "id": 2047,
    //             "name": "salt"
    //         }
    //     ],
    //     "equipment": [
    //         {
    //             "id": 404645,
    //             "name": "frying pan"
    //         }
    //     ]
    // }.parsedInstructions[0].steps

    return (
        <div className='recipe-card'>
            <MainHeader />

            {
                (ingredientList !== 0 && recipe !== null)
                &&
                <div className='main-recipe-div'>
                    <h2>{recipe.title}</h2>
            <div style={{height: '100%', width: '100%'}}>
                <div style={{float: 'left', position: 'relative', width: '25%'}}>Servings<br/>{recipe.servings}</div>
                <div style={{float: 'left', position: 'relative', width: '25%'}}>Ready in<br/>{recipe.readyInMinutes} min</div>
                <div style={{float: 'left', position: 'relative', width: '25%'}}>Cost<br/>{recipe.pricePerServing <= 200 ? "$" : recipe.pricePerServing <= 2000 ? "$$" : "$$$"}</div>
                <div style={{float: 'left', position: 'relative', width: '25%'}}>Health Score<br/>{recipe.healthScore}</div>
            </div>
            <img 
                src={recipe.image}
                alt='icon'
                className='main-img'
            />
            <h3>You will need...</h3>
            <ul>{ingredientList.map(item => {return <li key={item}>{item}</li>;})}</ul>
            <h3>Instructions</h3>
            <ol>
                {
                instructions.map(item => {
                    return <li key={item.number}>{item}</li>
                })
                }
            </ol>
            <h3>Diet and Allergy Information</h3>
            <div style={{float: 'left', position: 'relative', width: '100%'}}>
                <div style={{float: 'left', position: 'relative', width: '25%'}}>Dairy Free<br/>{recipe.dairyFree ? "Yes" : "No"}</div>
                <div style={{float: 'left', position: 'relative', width: '50%'}}>Gluten Free<br/>{recipe.glutenFree ? "Yes" : "No"}</div>
                <div style={{float: 'left', position: 'relative', width: '25%'}}>Vegetarian<br/>{recipe.vegetarian ? "Yes" : "No"}</div>
            </div>
        <div className='share-row'>
            <SnapShareButton
                url="https://notanthony.github.io/LTDC/"
            />
            <ShareButton
                text="Share your recipes with your friends!"
                title="Be My Chef App"
                url="https://notanthony.github.io/LTDC/"
            />
            <ShareButton
                text="Share your recipes with your friends!"
                title="Be My Chef App"
                url="https://notanthony.github.io/LTDC/"
            />

        </div>
                </div>
        }   
        </div>
        
    )
}

function getMissingIngredientsText(ingredients, link) {
    var str = "Someone has just invited you to cook with them! They are missing the following ingredients: \n";
    for(var i = 0; i < ingredients.length; ++i) {
        str += "☐ " + ingredients[i].name + "\n";
    }
    str += "See the full recipe here: " + link;
    return str;
}