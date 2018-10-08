import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Home from './features'
import UserResume from './features/user'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/:username" component={UserResume}/>
        </div>
      </Router>
    )
  }
}

export default App
