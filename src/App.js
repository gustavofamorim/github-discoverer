import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'

import UserResume from './features/user'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      redirectTo: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.usernameHandler = this.usernameHandler.bind(this)
  }

  usernameHandler(ev) {
    this.setState({ username: ev.target.value })
  }

  submitHandler(ev) {
    ev.preventDefault()
    this.setState({ redirectTo: `/${this.state.username}` })
  }

  render() {
    return (
      <Router>
        <div>
          { this.state.redirectTo && (
              <Redirect to={this.state.redirectTo}/>
          ) }
          <Route path="/" exact render={ () => (
              <form className="user-discoverer-form" onSubmit={ this.submitHandler }>
                <input className="user-name-input" onChange={ this.usernameHandler } type="search" placeholder="Username"></input>
                <button className="user-submit" type="submit"><Fa icon="search"/></button>
              </form>
            )}/>
          <Route path="/:username" component={UserResume}/>
        </div>
      </Router>
    )
  }
}

export default App
