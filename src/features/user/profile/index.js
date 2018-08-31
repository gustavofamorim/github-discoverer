
import React from 'react'
import { FontAwesomeIcon as Fa} from '@fortawesome/react-fontawesome'

import './style.scss'

const Profile = props => {

  let user_bio = props.user.bio ? props.user.bio : 'No bio'

  return (
    <div className="user-profile">
      <img className="user-avatar" src={props.user.avatar_url} alt={props.user.name}/>
      <h1 className="user-name">{props.user.name}</h1>
      <p className="user-location"><Fa icon="map-marker-alt"/> {props.user.location}</p>
      <p className="user-bio"><Fa icon="book"/> {user_bio}</p>
      <p className="user-links-h"><Fa icon="link"/> Links:</p>
      <div className="user-links">
        <a className="link" target="_blank" href={props.user.html_url}><Fa icon={['fab', 'github']}/></a>
        <a className="link" target={props.user.blog ? '_blank' : null} href={props.user.blog ? props.user.blog : '#'}><Fa icon="home"/></a>
      </div>
    </div>
  )
}

export default Profile
