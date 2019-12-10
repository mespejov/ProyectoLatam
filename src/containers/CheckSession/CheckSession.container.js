import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function CheckSession (props) {
  const { isLoggedIn } = useSelector(state => {
    const { loggedIn } = state.privateRouteReducer

    return { isLoggedIn: Boolean(loggedIn) }
  })

  if (isLoggedIn) {
    return <Redirect to='/private' />
  }

  return props.children
}

export default CheckSession
