import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPersonajes } from '../Personajes/Personajes.action'

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
      {personajes.map(mono => (
        <p key={mono.name}>{mono.name}</p>
      ))}
    </>
  )
}

export default PersonajesContainer
