import React, {useState} from 'react'
import '../../styles/search.css'
import MainHeader from '../global/MainHeader'
import SearchField from "react-search-field";
import SearchItem from '../global/SearchItem';
import {ingredientsSearch, complexSearch} from '../../api'
import {Route} from  'react-router-dom'

export default function SearchPage(props) {
    console.log(props.preferences.data.intolerances)
    const [dropdown, setDropdown ] = useState(0)
    
    const [result, setResult] = useState()
    const mealTypes = [
        "main course",
        "side dish",
        "dessert",
        "appetizer",
        "salad",
        "bread",
        "breakfast",
        "soup",
        "beverage",
        "sauce",
        "marinade",
        "fingerfood",
        "snack",
        "drink"
    ]

    const intolerances = [
        "peanut", 
        "seafood", 
        "sesame", 
        "shellfish", 
        "soy", 
        "sulfite", 
        "tree nut", 
        "wheat",
        "dairy", 
        "egg", 
        "gluten", 
        "grain", 
        
    ]

    const cuisines = [
        'mexican',
        'korean',
        'japanese',
        'italian',
        'indian',
        'greek',
        'french',
        'chinese',
        'caribbean',
        'cajun',
        'american',
        'african'
    ]

    function toggleDropdown(n){
        if (dropdown == n) setDropdown(0)
        else setDropdown(n)
    }

    return (
        <div>
            <MainHeader />
            {
                
                (props.searchType == 'complex')
                &&
                <div className='main-flex-search'>
                    <SearchField
                        placeholder= "Enter the recipe name"
                        onEnter={ async (value, event) => {
                            setResult(await complexSearch(value, event))
                        }}
                        onEnter={ async (value) => {
                            setResult(await complexSearch(value))
                        }}
                        classNames="test-class"
                    />
                    <div className='search-btn-bar'>
                        <div 
                            className='search-dropdown-btn'
                           onClick={()=>{toggleDropdown(1)}}
                        >
                            Intolerances
                        </div>
                        {
                                dropdown == 1
                                &&
                                <div className='extra-padding'>
                                    <form className='survey-form'>
                                    {
                                        intolerances.map((t) => (
                                            <SearchItem
                                            name='intolerances'
                                            value={t}
                                            color="white"
                                            label={
                                                t.charAt(0).toUpperCase() + t.slice(1)
                                            }
                                            checked={props.preferences.data.intolerances.indexOf(t) !== -1}
                                        />
                                        ))

                                    }
                                    </form>
                                </div>
                            }
                        <div 
                            className='search-dropdown-btn'
                            onClick={()=>{toggleDropdown(2)}}
                        >
                            Cuisine
                        </div>
                        {
                                dropdown == 2
                                &&
                                <div className='extra-padding'>
                                    <form className='survey-form'>
                                    {
                                        cuisines.map((t) => (
                                            <SearchItem
                                            name='cuisine'
                                            value={t}
                                            color="white"
                                            label={
                                                t.charAt(0).toUpperCase() + t.slice(1)
                                            }
                                            checked={props.preferences.data.cuisine.indexOf(t) !== -1}

                                        />
                                        ))

                                    }
                                    </form>
                                </div>
                            }
                        <div 
                            className='search-dropdown-btn'
                            onClick={() =>{
                                toggleDropdown(3)
                            }}
                        >
                            Meal Type
                            
                        </div>
                        {
                                dropdown == 3
                                &&
                                <div className='extra-padding'>
                                    <form className='survey-form'>
                                    {
                                        mealTypes.map((t) => (
                                            <SearchItem
                                            name='mealType'
                                            value={t}
                                            color="white"
                                            label={
                                                t.charAt(0).toUpperCase() + t.slice(1)
                                            }
                                        />
                                        ))

                                    }
                                    </form>
                                </div>

                            }
                    </div> 
                </div>
            }
            {
                
                (props.searchType == 'ingredients')
                &&
                <div className='main-flex-search'>
                    <label>Enter the ingredients you have</label>
                    <SearchField
                        placeholder= "apple,flour,sugar,etc."
                        onEnter={ async (value, event) => {
                            setResult(await ingredientsSearch(value, event))
                        }}
                        onEnter={ async (value) => {
                            setResult(await ingredientsSearch(value))
                        }}
                        classNames="test-class"
                    />
                </div>
            }
        </div>

        
        
    )
    
}