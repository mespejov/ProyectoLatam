import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from './config/store'
import LoginPage from './views/LoginPage'
import PrivatePage from './views/PrivatePage'
import PublicPage from './views/PublicPage'
import PrivateRouteContainer from './containers/PrivateRoute/PrivateRoute.container'
import './index.css'
import PersonajesPage from './views/PersonajesPage'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/public' component={PublicPage} />
        <Route exact path='/personajes' component={PersonajesPage} />
        <PrivateRouteContainer exact path='/private' component={PrivatePage} />
        <Route exact path='/403' render={() => <div>403</div>} />
        <Route path='*' render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
