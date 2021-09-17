import React from 'react'
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

// Other Components
import Header from './components/global/Header'


function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
          <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path='/login'>
                <LoginPage />
              </Route>
              <Route path='/recipe'>
                <RecipesPage />
              </Route>
              <Route path='/search'>
                <SearchPage />
              </Route>
              <Route path='/recipes'>
                <SingleRecipe />
              </Route>
              <Route path='/survey'>
                <SurveryPage />
              </Route>
              <Route path='/profile'>
                <MyProfile />
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
