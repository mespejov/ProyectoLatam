import { combineReducers } from 'redux'
import loginFormReducer from '../containers/LoginForm/LoginForm.reducer'
import privateRouteReducer from '../containers/PrivateRoute/PrivateRoute.reducer'
import personajesReducer from '../containers/Personajes/Personajes.reducer'
import capitulosReducer from '../containers/Capitulos/Capitulos.reducer'

const rootReducer = combineReducers({ loginFormReducer, privateRouteReducer, personajesReducer, capitulosReducer })

export default rootReducer
