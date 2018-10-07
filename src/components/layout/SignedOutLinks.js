import React from 'react'
import {NavLink} from 'react-router-dom'
export default () => {
  return (
    <div>
      <ul className="center buttonsContainer">
        <li> <NavLink to='/signup' className="waves-effect waves-light btn  btn-large white-text funcButton" > Sign Up</NavLink></li>
        <li> <NavLink to='/signin' className="waves-effect waves-light btn btn-large white-text funcButton"> Login </NavLink></li>
      </ul>
    </div>
  )
}
