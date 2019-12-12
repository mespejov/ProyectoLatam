import { CARGAR_CAPITULOS_OK } from '../Capitulos/Capitulos.action'

const initialState = {
  capitulos: []
}

function capitulosReducer (state = initialState, action) {
  console.log('capitulosReducer: ', action)

  switch (action.type) {
    case CARGAR_CAPITULOS_OK: {
      return {
        ...state,
        capitulos: state.capitulos.concat(action.payload.results)
      }
    }
    default: {
      return state
    }
  }
}

export default capitulosReducer
