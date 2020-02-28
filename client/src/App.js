import React from 'react'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component='register' />
      <Route exact path='/login' component='login' />
      <Route exact path='/jokes' component='jokes' />
    </div>
  )
}

export default App
