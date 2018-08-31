
import React, { Component } from 'react'

import Repos from './repos'
import Profile from './profile'

import api from './api'

import './style.scss'

class User extends Component {
  constructor() {
    super()
    this.state = {
      repos: [ ],
      profile: { }
    }
  }

  componentDidMount() {
    api.fetchRepos(this.props.match.params.username).then( res => this.setState({ repos: res.data }))
    api.fetchProfile(this.props.match.params.username).then( res => this.setState({ profile: res.data }))
  }

  render() {
    return (
      <div className="user-resume">
        <Profile className="user-profile" user={this.state.profile}></Profile>
        <Repos className="user-repos" repos={this.state.repos}></Repos>
      </div>
    )
  }
}

export default User
