import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute (props) {
  const { isLoggedIn } = useSelector(state => {
    const { loggedIn } = state.privateRouteReducer
    console.log('loggedIn', loggedIn)
    return { isLoggedIn: Boolean(loggedIn) }
  })
  const { component: Component, ...restProps } = props
  console.log('PrivateRoute', isLoggedIn)
  return (
    <Route
      {...restProps}
      render={componentProps => {
        if (!isLoggedIn) {
          return <Redirect to='/login' />
        }

        return <Component {...componentProps} />
      }}
    />
  )
}

export default PrivateRoute
