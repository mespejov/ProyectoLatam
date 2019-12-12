import Axios from 'axios'

export const CARGAR_CAPITULOS_OK = 'CARGAR_CAPITULOS_OK'

export const obtenerCapitulos = () => async dispatch => {
  try {
    const respuesta = await Axios.get('https://rickandmortyapi.com/api/episode/')
    console.log('Respuesta capitulos: ', respuesta)
    dispatch(cargaBIEN(respuesta.data))
  } catch (error) {
  }
}
export const cargaBIEN = payload => ({
  payload,
  type: CARGAR_CAPITULOS_OK
})
