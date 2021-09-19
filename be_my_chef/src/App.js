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

const schools = [
  {
    id: 0,
    name: "Collège Jean-Eudes",
    points: 0
  },
  {
    id: 1,
    name: "Collège Regina Assumpta",
    points: 0
  },
  {
    id: 2,
    name: "École internationale de Montréal",
    points: 0
  },
  {
    id: 3,
    name:  "École secondaire Eulalie-Durocher",
    points: 0
  },
  {
    id: 4,
    name: "Emmanuel Christian School, Quebec",
    points: 0
  },
  {
    id: 5,
    name: "Greaves Adventist Academy",
    points: 0
  },
  {
    id: 6,
    name: "Kells Academy",
    points: 0
  },
  {
    id: 7,
    name: "Lindsay Place High School",
    points: 0
  },
  {
    id: 8,
    name: "James Lyng High School",
    points: 0
  },
  {
    id: 9,
    name: "École Maïmonide",
    points: 0
  },
  {
    id: 10,
    name: "Marymount Academy",
    points: 0
  },
  {
    id: 11,
    name: "John Rennie High School",
    points: 0
  }
]

function App() {
  const [ searchQueries, setSearchQueries ] = useState({
    intolerances: [],
    cuisine: []
  })

  const [ guilds, setGuilds ] = useState(schools)

  const setPreferences= function(intolerances, cuisine){ 
    setSearchQueries({
      intolerances: [...intolerances],
      cuisine: [...cuisine]
    })
  }

  const preferenceObj = {
    data: searchQueries,
    setPreferences: setPreferences,
    guilds: guilds,
    addScore: addScore
  }

  function addScore(guildId, scoreToAdd){
    let tempArr = [...guilds]
    let newArr = []

    guilds.forEach((guild) => {
      if (guild.id !== guildId){
        newArr.push(guild)
      }
      else {
        newArr.push({
          name: guild.name,
          id: guild.id,
          points: guild.points + scoreToAdd
        })
      }
    })
    
    setGuilds(newArr)

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
                  searchType='complex'
                />
              </Route>
              <Route path='/search2'>
                <SearchPage 
                  preferences={preferenceObj}
                  searchType='ingredients'
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
