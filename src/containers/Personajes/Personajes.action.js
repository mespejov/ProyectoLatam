import Axios from 'axios'

export const CARGAR_PERSONAJES_OK = 'CARGAR_PERSONAJES_OK'

export const obtenerPersonajes = () => async dispatch => {
  try {
    const respuesta = await Axios.get('https://rickandmortyapi.com/api/character/')
    console.log('Respuesta personajes:', respuesta)
    dispatch(cargaOK(respuesta.data))
  } catch (error) {
  }
}
export const cargaOK = payload => ({
  payload,
  type: CARGAR_PERSONAJES_OK
})
