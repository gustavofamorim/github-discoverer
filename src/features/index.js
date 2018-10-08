
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'

import './style.scss'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.usernameHandler = this.usernameHandler.bind(this)
  }

  usernameHandler(ev) {
    this.setState({ username: ev.target.value })
  }

  submitHandler(ev) {
    ev.preventDefault()
    this.props.history.push(`/${this.state.username}`)
  }

  render() {
    return (
      <form className="user-discoverer-form" onSubmit={ this.submitHandler }>
        <input className="user-name-input" onChange={ this.usernameHandler } type="search" placeholder="Username"></input>
        <button className="user-submit" type="submit"><Fa icon="search"/></button>
      </form>
    )
  }
}

export default withRouter(Home)
