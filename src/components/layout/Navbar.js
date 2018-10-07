import React from 'react'
//import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLinks'
import SignedOutLink from './SignedOutLinks'

export default () => {
  return (
    <div>
      <SignedInLink/>
      <SignedOutLink/>
    </div>
  )
}
