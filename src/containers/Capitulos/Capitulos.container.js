import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerCapitulos } from '../Capitulos/Capitulos.action'
import '../../index.css'

const CapitulosContainer = () => {
  const dispatch = useDispatch()

  const { capitulos } = useSelector(state =>
    ({
      capitulos: state.capitulosReducer.capitulos
    }))

  useEffect(() => {
    dispatch(obtenerCapitulos())
  }, [])

  return (
    <>
      <section>
        <div class='grid-container'>
          {capitulos.map((capi, index) => (
            <>
              <div llave={`capi-${index}`}>
                <div> <p key={capi.name}>{capi.name} </p> </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

export default CapitulosContainer
