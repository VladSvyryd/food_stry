import React from 'react'
import {NavLink} from 'react-router-dom'

export default () => {
  return (
    <div>
      <ul className=" buttonsContainer">
        <li> <NavLink to='/findrecipe' className="waves-effect waves-light btn-large btn white-text funcButton" ><img src="./pics/my_location.png" alt=""/> Find my Recipe</NavLink></li>
        <li> <NavLink to='/favorite' className="waves-effect waves-light btn-large btn funcButton"><img src="./pics/smile.png" alt=""/> Favorite</NavLink></li>
        <li > <NavLink to='/myproducts' className="waves-effect waves-light btn-large btn funcButton"><img src="./pics/groceries.png" alt=""/> My Products</NavLink></li>
        <li ><NavLink to='/friends' className="waves-effect waves-light btn-large btn funcButton"><img src="./pics/friends.png" alt=""/> Friends</NavLink></li>
      </ul>
    </div>
  )
}
