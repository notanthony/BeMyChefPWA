import React from 'react'


export default function SearchItem(props) {
    console.log(props.checked)
    if (props.checked){
        return (
            <div>
            <input 
                name={props.name}
                type='checkbox'
                value={props.value}
                defaultChecked='true'
            >
            </input>
            <label>
                {"  "}{props.label}
            </label>
        </div>
        )
    }
    else{
        return (
            <div>
            <input 
                name={props.name}
                type='checkbox'
                value={props.value}
            >
            </input>
            <label>
                {"  "}{props.label}
            </label>
        </div>
        )
    }
}
