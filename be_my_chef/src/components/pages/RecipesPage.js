import React, {useState, useEffect} from 'react'
import {recipeFromId} from '../../api'
import MainHeader from '../global/MainHeader'
import '../../styles/recipe-display.css'
import { SnapShareButton,ShareButton,InviteButton} from '../global/Share';
import {FaShareAltSquare, FaUserPlus, FaSnapchatGhost} from 'react-icons/fa'



export default function RecipesPage(props) {
    const [ recipe, setRecipe ] = useState({
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "weightWatcherSmartPoints": 8,
        "gaps": "no",
        "lowFodmap": false,
        "aggregateLikes": 53,
        "spoonacularScore": 40,
        "healthScore": 4,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 62.27,
        "extendedIngredients": [
            {
                "id": 5006,
                "aisle": "Meat",
                "image": "whole-chicken.jpg",
                "consistency": "solid",
                "name": "chicken",
                "nameClean": "whole chicken",
                "original": "2 pounds chicken",
                "originalString": "2 pounds chicken",
                "originalName": "chicken",
                "amount": 2,
                "unit": "pounds",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 907.185,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 20081,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "solid",
                "name": "flour",
                "nameClean": "wheat flour",
                "original": "3/4 cup flour",
                "originalString": "3/4 cup flour",
                "originalName": "flour",
                "amount": 0.75,
                "unit": "cup",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 0.75,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 177.441,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "solid",
                "name": "salt",
                "nameClean": "salt",
                "original": "2 teaspoons salt",
                "originalString": "2 teaspoons salt",
                "originalName": "salt",
                "amount": 2,
                "unit": "teaspoons",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 2028,
                "aisle": "Spices and Seasonings",
                "image": "paprika.jpg",
                "consistency": "solid",
                "name": "paprika",
                "nameClean": "paprika",
                "original": "1 teaspoon paprika",
                "originalString": "1 teaspoon paprika",
                "originalName": "paprika",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "solid",
                "name": "pepper",
                "nameClean": "black pepper",
                "original": "1 teaspoon pepper",
                "originalString": "1 teaspoon pepper",
                "originalName": "pepper",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 1230,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "buttermilk.jpg",
                "consistency": "solid",
                "name": "buttermilk",
                "nameClean": "buttermilk",
                "original": "1 cup buttermilk",
                "originalString": "1 cup buttermilk",
                "originalName": "buttermilk",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "metaInformation": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 4513,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "vegetable-oil.jpg",
                "consistency": "liquid",
                "name": "vegetable oil",
                "nameClean": "vegetable oil",
                "original": "Vegetable oil (enough to cover chicken), about 1 quart",
                "originalString": "Vegetable oil (enough to cover chicken), about 1 quart",
                "originalName": "Vegetable oil (enough to cover chicken), about 1 quart",
                "amount": 1,
                "unit": "serving",
                "meta": [
                    "to cover chicken), 1 quart"
                ],
                "metaInformation": [
                    "to cover chicken), 1 quart"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            }
        ],
        "id": 640803,
        "title": "Crispy Buttermilk Fried Chicken",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "https://www.foodista.com/recipe/G2QDD6GF/crispy-buttermilk-fried-chicken",
        "image": "https://spoonacular.com/recipeImages/640803-556x370.jpg",
        "imageType": "jpg",
        "summary": "Forget going out to eat or ordering takeout every time you crave Southern food. Try making Crispy Buttermilk Fried Chicken at home. One portion of this dish contains roughly <b>16g of protein</b>, <b>15g of fat</b>, and a total of <b>260 calories</b>. For <b>62 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. 53 people found this recipe to be delicious and satisfying. This recipe from Foodista requires vegetable oil, buttermilk, salt, and paprika. It works best as a main course, and is done in roughly <b>around 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 38%</b>, which is rather bad. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/crispy-buttermilk-fried-chicken-912357\">Crispy Buttermilk Fried Chicken</a>, <a href=\"https://spoonacular.com/recipes/crispy-buttermilk-fried-chicken-32074\">Crispy Buttermilk Fried Chicken</a>, and <a href=\"https://spoonacular.com/recipes/crispy-oven-fried-buttermilk-chicken-244810\">Crispy Oven Fried Buttermilk Chicken</a>.",
        "cuisines": [
            "Southern"
        ],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "riesling",
                "sparkling wine",
                "zinfandel"
            ],
            "pairingText": "Riesling, Sparkling Wine, and Zinfandel are great choices for Fried Chicken. In general, there are a few rules that will help you pair wine with southern food. Food-friendly riesling or sparkling white wine will work with many fried foods, while zinfandel is great with barbecued fare. The Schloss Vollrads Riesling Spatlese with a 4 out of 5 star rating seems like a good match. It costs about 29 dollars per bottle.",
            "productMatches": [
                {
                    "id": 441216,
                    "title": "Schloss Vollrads Riesling Spatlese",
                    "description": "Classic natural sweet Spatlese with nice acidity and elegant, natural residual sugar. Selective harvest, gentle processing of the must, systematic clarification, slow fermentation and careful finishing are the basics for this traditional Vollrads' Riesling.This wine pairs perfectly with Asian cuisine due to the harmony of sweetness and acidity. Also interesting taste combinations can be achieved through the pairing of blue-veined cheese or a fruit dessert.",
                    "price": "$28.99",
                    "imageUrl": "https://spoonacular.com/productImages/441216-312x231.jpg",
                    "averageRating": 0.8,
                    "ratingCount": 6,
                    "score": 0.7473684210526317,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fschloss-vollrads-riesling-spatlese-2014%2F153988"
                }
            ]
        },
        "instructions": "Mix flour, salt, paprika and pepper. Dip chicken in buttermilk and then into flour mixture. Cook chicken in oil, starting on medium-high heat, then, when chicken is browned, reduce heat to medium and cook an additional 30 to 35 minutes until chicken is done (approx 150-155 degrees F internal), turning occasionally.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Mix flour, salt, paprika and pepper. Dip chicken in buttermilk and then into flour mixture. Cook chicken in oil, starting on medium-high heat, then, when chicken is browned, reduce heat to medium and cook an additional 30 to 35 minutes until chicken is done (approx 150-155 degrees F internal), turning occasionally.",
                        "ingredients": [
                            {
                                "id": 1230,
                                "name": "buttermilk",
                                "localizedName": "buttermilk",
                                "image": "buttermilk.jpg"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 2028,
                                "name": "paprika",
                                "localizedName": "paprika",
                                "image": "paprika.jpg"
                            },
                            {
                                "id": 1002030,
                                "name": "pepper",
                                "localizedName": "pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 20081,
                                "name": "all purpose flour",
                                "localizedName": "all purpose flour",
                                "image": "flour.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            },
                            {
                                "id": 0,
                                "name": "dip",
                                "localizedName": "dip",
                                "image": ""
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 30,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/crispy-buttermilk-fried-chicken-640803"
    })
    const [ ingredientList, setIngredientList] = useState([])
    const [ instructions, setInstructions ] = useState([])

    useEffect( async () => {
        console.log(props.recipeId)
        await recipeFromId(props.recipeId)
        .then(async (res) => {
            console.log(recipe)
            await setRecipe(res)
            
        })
        .then(() => {
            let tempArr = []
            console.log(recipe)
            if (recipe == null || !recipe.extendedIngredients){
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
        if (recipe && recipe.instructions){
            let re = new RegExp("/</?[^/>]+(/>|$)/g")
            let arr = recipe.instructions.replace(/<[^>]*>?/gm, '').split('.')
            arr.pop()
            setInstructions(arr)
        }
        else{
            setTimeout(() => {
                let re = new RegExp("/</?[^/>]+(/>|$)/g")
                let arr = recipe.instructions.replace(/<[^>]*>?/gm, '').split('.')
                arr.pop()
                setInstructions(arr)
            }, 1000)
        }


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
            <InviteButton
            //hardcode for now
                text={getMissingIngredientsText("abc,123,you,i,and")}
                title="Be My Chef App"
                url="https://notanthony.github.io/LTDC/"
            />

        </div>
                </div>
        }   
        </div>
        
    )
}

function getMissingIngredientsText(ingredientsStr) {
   var ingredients = ingredientsStr.split(",")
    var str = "Someone has just invited you to cook with them! They are missing the following ingredients: \n";
    for(var i = 0; i < ingredients.length; ++i) {
        str += "☐ " + ingredients[i].name + "\n";
    }
    return str;
}