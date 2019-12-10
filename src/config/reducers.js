import { combineReducers } from 'redux'
import loginFormReducer from '../containers/LoginForm/LoginForm.reducer'
import privateRouteReducer from '../containers/PrivateRoute/PrivateRoute.reducer'
import personajesReducer from '../containers/Personajes/Personajes.reducer'

const rootReducer = combineReducers({ loginFormReducer, privateRouteReducer, personajesReducer })

export default rootReducer
