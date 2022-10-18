import React from 'react'
import { Nav } from '../components/Nav'

export const Dashboard = () => {
  return (
    <>
      <Nav/>
      <div>
        <main className='grid__cards'>
            <div className='cards__grid'>
                <div className='card'>
                    <h2 className='card__title'>Clima</h2>
                    <div className='card__content'>
                      <div className="content">
                        
                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>País Seleccionado</h2>
                    <div className='card__content'>
                      <div className="content">

                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>Tareas Pendientes</h2>
                    <div className='card__content'>
                      <div className="content">

                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>Hora</h2>
                    <div className='card__content'>
                      <div className="content">

                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>Tareas Completadas</h2>
                    <div className='card__content'>
                      <div className="content">

                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>Zonas Horarias Disponibles</h2>
                    <div className='card__content'>
                      <div className="content">

                      </div>
                    </div>
                </div>
            </div>
            <aside className='countries__card'>
                <h2 className='card__title'>Países Disponibles</h2>
                <div className='countries'>

                </div>
            </aside>
        </main>
      </div>
    </>
  )
}
