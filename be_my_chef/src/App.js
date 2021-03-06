import React, { useEffect, useState } from 'react'
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
import Leaderboard from './components/pages/Leaderboard'

// Other Components
import Header from './components/global/Header'


const schools = [
  {
    id: 0,
    name: "Collège Jean-Eudes",
    points: 1
  },
  {
    id: 1,
    name: "Collège Regina Assumpta",
    points: 2
  },
  {
    id: 2,
    name: "École internationale de Montréal",
    points: 3
  },
  {
    id: 3,
    name:  "École secondaire Eulalie-Durocher",
    points: 6
  },
  {
    id: 4,
    name: "Emmanuel Christian School, Quebec",
    points: 84
  },
  {
    id: 5,
    name: "Greaves Adventist Academy",
    points: 4
  },
  {
    id: 6,
    name: "Kells Academy",
    points: 544
  },
  {
    id: 7,
    name: "Lindsay Place High School",
    points: 12
  },
  {
    id: 8,
    name: "James Lyng High School",
    points: 23
  },
  {
    id: 9,
    name: "École Maïmonide",
    points: 21
  },
  {
    id: 10,
    name: "Marymount Academy",
    points: 11
  },
  {
    id: 11,
    name: "John Rennie High School",
    points: 676
  },
  {
    id: 12,
    name: "Aime Renaud High School",
    points: 1212
  },
  {
    id: 13,
    name: "Beurling Academy",
    points: 3
  }
]


function App() {
  const [ searchQueries, setSearchQueries ] = useState({
    intolerances: [],
    cuisine: []
  })

  const [ guilds, setGuilds ] = useState(schools)
  const [ guild, setGuild ] = useState({
    name: '',
    points: 0,
    place: '1st',
    id: ''
  })


  const setPreferences= function(intolerances, cuisine){ 
    setSearchQueries({
      intolerances: [...intolerances],
      cuisine: [...cuisine]
    })
  }

  const [ schoolId, setSchoolId] = useState()

  const setSchool = function(id){
    setSchoolId(id)
    for (let i = 0; i < guilds.length; i++){
      if (guilds[i].id == id){
        setGuild({
          name: guilds[i].name,
          points: guild.points,
          place: guild.place,
          id: id
        })
      } 
    }
  }

  const preferenceObj = {
    data: searchQueries,
    setPreferences: setPreferences,
    guilds: guilds,
    addScore: addScore,
    schoolId: schoolId,
    setSchool: setSchool,
    guild: guild
  }

  function addScore(guildId, scoreToAdd){
    let newArr = []

    guilds.forEach((g) => {
      if (g.id !== guildId){
        newArr.push(g)
      }
      else {
        newArr.push({
          name: g.name,
          id: g.id,
          points: g.points + scoreToAdd
        })
        setGuild({
          name: guild.name,
          points: g.points + scoreToAdd,
          place: guild.place
        })
      }
    })
    
    setGuilds(newArr)

    let place = 1;
    for (let i = 0; i < guilds.length; i++){
      if (guilds[i].points > guild.points){
        place ++ 
      }
    }
    if (place == 1) place = '1st'
    else if (place == 2) place = '2nd'
    else if (place == 3) place = '3rd'
    else place = '' + place + 'th'

    setGuild({
      name: guild.name,
      points: guild.points,
      place: guild.place
    })
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
              <Route 
                path='/guild'
                
              >
                <GuildPage  
                preferences={preferenceObj}/>
              </Route>
              <Route path='/leaderboard'>
                  <Leaderboard 
                      guilds={guilds}
                      schoolId={schoolId}
                      guild={guild}
                  />
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
              <Route exact path='/recipes/:id'
                render={(props) => {
                  return (
                    <RecipesPage 
                      preferences={preferenceObj}
                      recipeId={props.match.params.id}
                    />
                  )
                }}                                                
              />
                

              <Route path='/survey'>
                <SurveryPage 
                  preferences={preferenceObj}
                />
              </Route>
              <Route path='/tips'>
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
