import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import '../../styles/header.css'

export default function Header() {

  const history = useHistory()
    
  return (
        <div className="header">
          <h1 className='header-title' onClick={() => {
                    history.push('/')
                }}>
            BE MY CHEF
          </h1>

          <div className='header-flex'>
            <div className="pill"></div>
            <h2 className='header-secondary'>La Tablée des Chefs</h2>
            <div className="pill"></div>
          </div>

    </div>
    )
}
