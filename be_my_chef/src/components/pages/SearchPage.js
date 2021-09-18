import React from 'react'
import '../../styles/default.css'
import MainHeader from '../global/MainHeader'
import SearchField from "react-search-field";


export default function SearchPage(props) {
    if (props.searchType == "complex") {
        return (
        
            <div className='main-flex'>
                <SearchField
                placeholder= "Enter the recipe name"
                onEnter={this.props.searchfunction}
                onSearchClick={this.props.searchfunction}
                searchText="This is initial search text"
                classNames="test-class"
                />
            </div>
        )
    } else {
        
    }
    
}