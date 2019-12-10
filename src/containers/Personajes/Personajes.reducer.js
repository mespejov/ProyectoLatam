import { CARGAR_PERSONAJES_OK } from './Personajes.action'

const initialState = {
  personajes: []
}

function personajesReducer (state = initialState, action) {
  console.log('personajesReducer: ', action)

  switch (action.type) {
    case CARGAR_PERSONAJES_OK: {
      return {
        ...state,
        personajes: state.personajes.concat(action.payload.results)
      }
    }
    default: {
      return state
    }
  }
}

export default personajesReducer
