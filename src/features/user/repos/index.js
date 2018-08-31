
import React from 'react'

import Repo from './repo'

import './style.scss'

const Repos = props => {
  return (
    <div className="repos">
      <h2 className="repos-h">Repositories</h2>
      {props.repos.map(repo => (
        <Repo className="repo-item" repo={repo} key={repo.id}></Repo>
      ))}
    </div>
  )
}

export default Repos
