
import React from 'react'

import Repos from './repos'
import Profile from './profile'

import './style.scss'

const User = props => {
  return (
    <div className="user-resume">
      <Profile className="user-profile" user={props.profile}></Profile>
      <Repos className="user-repos" repos={props.repos}></Repos>
    </div>
  )
}

export default User
