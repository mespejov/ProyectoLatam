import React from 'react'
import LoginFormContainer from '../containers/LoginForm/LoginForm.container'
import CheckSessionContainer from '../containers/CheckSession/CheckSession.container'

function LoginPage () {
  return (
    <CheckSessionContainer>
      <LoginFormContainer />
    </CheckSessionContainer>
  )
}

export default LoginPage
