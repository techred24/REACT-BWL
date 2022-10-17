import React from 'react'
import { Link } from 'react-router-dom'
import { sendPost } from '../helpers/fetchFunctions';
import { useForm } from '../hooks/useForm'

export const Login = ({ setInLoginPage }) => {
    const { formState, email, password, inputChange } = useForm({
        email: '',
        password: ''
    });
    const logUser = async (e) => {
        e.preventDefault();
        const data = await sendPost('http://localhost:3000/login', formState);
        if (data.error) return
    }
  return (
    <div className='login-component'>
        <h1 className='login-title'>Bienvenido</h1>

        <div>
            <div className='inputs'>
                <label htmlFor="email">Correo:</label>
                <input type="email" name="email" id="email" value={email} onChange={inputChange} />
            </div>
            <div className='inputs'>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name='password' id='password' value={password} onChange={inputChange} />
            </div>

                <button className='button-submit' type='submit' onClick={logUser}>
                    Ingresar
                </button>

                <div className='register-link-component'>
                    <p>¿No tienes cuenta?</p>
                    <button className='send-to-register' onClick={() => setInLoginPage(false) }>Registrate</button>
                </div>
        </div>
    </div>
  )
}
