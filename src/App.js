import React, { Component } from 'react'

import UserResume from './features/user'

import api from './features/user/api'

class App extends Component {
  constructor() {
    super()
    this.state = {
      profile: {},
      repos: []
    }
  }

  componentDidMount() {
    api.fetchRepos('gustavofamorim').then( res => this.setState({ repos: res.data }))
    api.fetchProfile('gustavofamorim').then( res => this.setState({ profile: res.data }))
  }

  render() {
    return (
      <UserResume repos={this.state.repos} profile={this.state.profile}></UserResume>
    )
  }
}

export default App
