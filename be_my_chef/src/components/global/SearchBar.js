import React from 'react'
import '../../styles/searchbar.css'
import { IoSearchOutline } from 'react-icons/io5'

export default function SearchBar(props) {
    //props : 
    
    const {handleSubmit} = props
  return (
        <div className="search-bar-div">
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <input 
                    id={props.ID}
                    type='text'
                    background='white'
                    color='black'
                    onChange={() => props.onChange()}
                >
                </input>
                <button type='submit'>
                <IoSearchOutline/>

                </button>
            </form>

        </div>
    )
}
