import React from 'react'
import { Link } from  'react-router-dom'
import styled from 'styled-components'



export default function Header() {

    return (
        <div className="Header">
        <h1>Be My Chef</h1>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '50%'}}>
          <Link to='/login'> login</Link>
          <Link to='/survey'> survey</Link>
          <Link to='/search'> search</Link>
          <Link to='/recipes'> recipes</Link>
          <Link to='/recipe'> recipe</Link>
        </div>
    </div>
    )
}
