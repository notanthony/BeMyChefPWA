import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from  'react-router-dom'

import './styles/app.css'

// Page Components
import LoginPage from './components/pages/LoginPage'
import RecipesPage from './components/pages/RecipesPage'
import SearchPage from './components/pages/SearchPage'
import SingleRecipe from './components/pages/SingleRecipe'
import SurveryPage from './components/pages/SurveyPage'
import HomePage from './components/pages/HomePage'
import MyProfile from './components/pages/MyProfile'
import GuildPage from './components/pages/GuildPage'
import TipPage from './components/pages/TipPage'

// Other Components
import Header from './components/global/Header'


function App() {
  const [ searchQueries, setSearchQueries ] = useState({
    intolerances: [],
    cuisine: []
  })

  const setPreferences= function(intolerances, cuisine){ 
    setSearchQueries({
      intolerances: [...intolerances],
      cuisine: [...cuisine]
    })
  }

  const preferenceObj = {
    data: searchQueries,
    setPreferences: setPreferences
  }


  return (
    <div className='app-container'>
      <BrowserRouter>
          <Switch>
              <Route path="/" exact>
                <HomePage 
                  preferences={preferenceObj}
                />
              </Route>
              <Route path='/guild' exact>
                <GuildPage  />
              </Route>
              <Route path='/login'>
                <LoginPage />
              </Route>
              <Route path='/recipe'>
                <RecipesPage />
              </Route>
              <Route path='/search'>
                <SearchPage 
                  preferences={preferenceObj}
                />
              </Route>
              <Route path='/recipes'>
                <SingleRecipe 
                  preferences={preferenceObj}
                />
              </Route>
              <Route path='/survey'>
                <SurveryPage 
                  preferences={preferenceObj}
                />
              </Route>
              <Route path='/tip'>
                <TipPage/>
                </Route>
              <Route path='/profile'>
                <MyProfile 
                  preferences={preferenceObj}
                />
              </Route>
              <Route path='/'>
                <h1>404 Page not found</h1>
              </Route>
          </Switch>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
