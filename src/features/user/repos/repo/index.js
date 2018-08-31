
import React from 'react'
import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'

import './style.scss'

const Repo = props => {
  return (
    <div className="repo">
      <a className="repo-name" target="_blank" href={props.repo.html_url}><h4>{props.repo.name}</h4></a>
      <p className="repo-description">{props.repo.description}</p>
      <div className="repo-info">
        <p className="repo-info-item"><Fa icon="file-code"/> {props.repo.language}</p>
        <p className="repo-info-item"><Fa icon="code-branch"/> {props.repo.default_branch}</p>
      </div>
      <div className="repo-stats">
        <p className="repo-stats-item"><Fa icon="exclamation-circle"/> {props.repo.open_issues}</p>
        <p className="repo-stats-item"><Fa icon="star"/> {props.repo.stargazers_count}</p>
        <p className="repo-stats-item"><Fa icon="eye"/> {props.repo.watchers_count}</p>
      </div>
    </div>
  )
}

export default Repo
