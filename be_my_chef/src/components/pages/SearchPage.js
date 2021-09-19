import React, {useState} from 'react'
import '../../styles/search.css'
import MainHeader from '../global/MainHeader'
import SearchField from "react-search-field";
import SearchItem from '../global/SearchItem';
import SearchBar from '../global/SearchBar'
import {ingredientsSearch, complexSearch} from '../../api'
import {Route} from  'react-router-dom'

export default function SearchPage(props) {
    console.log(props.preferences.data.intolerances)
    const [dropdown, setDropdown ] = useState(0)
    const [result, setResult] = useState()

    const [intolerancesArr, setIntolerancesArr] = useState(props.preferences.data.intolerances)
    const [cuisinesArr, setCuisinesArr ] = useState(props.preferences.data.cuisine)
    const [mealTypeArr, setMealTypeArr] = useState([])
    const [searchState, setSearchState] = useState('')
    const [searchState1, setSearchState1] = useState('')

    function updateSearchState(){
        setSearchState(document.getElementById('searchInput').value)
    }
    function updateSearchState1(){
        setSearchState(document.getElementById('searchInput1').value)
    }
    function intoleranceChange(){
        let arr1 = []
        let box1 = document.getElementsByName('intolerances')

        box1.forEach((b) => {
            if (b.checked) arr1.push(b.value)
        })        


        console.log(arr1)
        setIntolerancesArr(arr1)

    }

    function cuisinesChange(){
        let box2 = document.getElementsByName('cuisine')
        let arr2 = []
        box2.forEach((b) => {
            if (b.checked) arr2.push(b.value)
        })

        console.log(arr2)
        setCuisinesArr(arr2)
    }

    function mealTypeChange(){
        let box3 = document.getElementsByName('mealType')
        let arr3 = []
        box3.forEach((b) => {
            if (b.checked) arr3.push(b.value)
        })
        console.log(arr3)
        setMealTypeArr(arr3)
    }

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
                    <SearchBar 
                        id='searchInput'
                        onChange={() => updateSearchState()}
                        handleSubmit={async () => {
                            setResult(await complexSearch(searchState, mealTypeArr, intolerancesArr, cuisinesArr))
                        }}
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
                                    <form className='survey-form' onChange={() => intoleranceChange()}>
                                    {
                                        intolerances.map((t) => (
                                            <SearchItem
                                            name='intolerances'
                                            value={t}
                                            color="white"
                                            label={
                                                t.charAt(0).toUpperCase() + t.slice(1)
                                            }
                                            checked={intolerancesArr.indexOf(t) !== -1}
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
                                    <form className='survey-form' onChange={() => cuisinesChange()}>
                                    {
                                        cuisines.map((t) => (
                                            <SearchItem
                                            name='cuisine'
                                            value={t}
                                            color="white"
                                            label={
                                                t.charAt(0).toUpperCase() + t.slice(1)
                                            }
                                            checked={cuisinesArr.indexOf(t) !== -1}

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
                                    <form className='survey-form' onChange={() => mealTypeChange()}>
                                    {
                                        mealTypes.map((t) => (
                                            <SearchItem
                                            name='mealType'
                                            value={t}
                                            color="white"
                                            label={
                                                t.charAt(0).toUpperCase() + t.slice(1)
                                            }
                                            checked={mealTypeArr.indexOf(t) !== -1}

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

                    <SearchBar 
                        id='searchInput1'
                        onChange={() => updateSearchState1()}
                        handleSubmit={async () => {
                            setResult(await ingredientsSearch(searchState1))
                        }}
                    />
                </div>
            }
        </div>

        
        
    )
    
}