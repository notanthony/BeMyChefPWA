import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from  'react-router-dom'


// Page Components
import LoginPage from './components/pages/LoginPage'
import RecipesPage from './components/pages/RecipesPage'
import SearchPage from './components/pages/SearchPage'
import SingleRecipe from './components/pages/SingleRecipe'
import SurveryPage from './components/pages/SurveyPage'

// Other Components
import Header from './components/global/Header'


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route path="/" exact>
              <h1>
                from route
              </h1>
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/survey'>
            <RecipesPage />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/recipes'>
            <SingleRecipe />
          </Route>
          <Route path='/recipe'>
            <SurveryPage />
          </Route>
          <Route path='/'>
            <h1>404 Page not found</h1>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
