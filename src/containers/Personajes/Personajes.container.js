import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPersonajes } from '../Personajes/Personajes.action'
import '../../index.css'

const PersonajesContainer = () => {
  const dispatch = useDispatch()

  const { personajes } = useSelector(state =>
    ({
      personajes: state.personajesReducer.personajes
    }))

  useEffect(() => {
    dispatch(obtenerPersonajes())
  }, [])

  return (
    <>
      <section>
        <div class='grid-container'>
          {personajes.map((mono, index) => (
            <>
              <div llave={`mono-${index}`}>
                <div> <p key={mono.name}>{mono.name}</p> <img src={mono.image} />
                  <p>Agregar a favoritos: <input type='checkbox' name='favoritos' value='Favoritos' /></p>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

export default PersonajesContainer
