import React from 'react'
import { Route } from 'react-router-dom'

import Register from './components/Register'
import Login from './components/Login'
import Jokes from './components/Jokes'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/jokes' component={Jokes} />
    </div>
  )
}

export default App
