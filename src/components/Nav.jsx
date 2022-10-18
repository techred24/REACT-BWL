import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Nav = () => {
    const navigate = useNavigate();
    const goToDashboard = () => {
        navigate('/dashboard')
    }
    const goToUsers = () => {
        navigate('/usuarios')
    }
  return (
    <nav className='nav'>
        <div className='nav__navigation'>
            <button onClick={goToDashboard} className='nav__navigation-buttons'>Dashboard</button>
            <button onClick={goToUsers} className='nav__navigation-buttons'>Usarios</button>
        </div>
        <div className='nav__userinfo'>
            <div className='nav__photo'>FR</div>
            <p className='nav__username'>Flavio Temich</p>
        </div>
    </nav>
  )
}
