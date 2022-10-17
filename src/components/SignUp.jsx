import React from 'react'
import { sendPost } from '../helpers/fetchFunctions';
import { useForm } from '../hooks/useForm'

export const SignUp = ({ setInLoginPage }) => {
    const { formState, email, password, password2, name, inputChange } =  useForm({
        email: '',
        password: '',
        password2: '',
        name: ''
    });
    const registerUser = async (e) => {
        e.preventDefault();
        const data = await sendPost('http://localhost:3000/register', formState);
        if (data.error) return
        if (data.email && data.name) 
    }
  return (
    <div className='signup-component'>
        <h1 className='signup-title'>Registro</h1>

        <div>
            <div className='inputs'>
                <label htmlFor="email">Correo:</label>
                <input type="email" name="email" id="email" value={email} onChange={inputChange} />
            </div>
            <div className='passwords-field'>
                <div className='inputs'>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name='password' id='password' value={password} onChange={inputChange} />
                </div>
                <div className='inputs'>
                    <label htmlFor="password2">Confirmar Contraseña:</label>
                    <input type="password" name='password2' id='password2' value={password2} onChange={inputChange} />
                </div>
            </div>
            <div className='inputs'>
                <label htmlFor="name">Nombre Completo:</label>
                <input type="text" name="name" id="name" value={name} onChange={inputChange} />
            </div>

                <button className='button-submit' type='submit' onClick={registerUser}>
                    Registrarse
                </button>

                <div className='login-link-component'>
                    <p>¿Ya tienes cuenta?</p>
                    <button className='send-to-login' onClick={() => setInLoginPage(true) }>Ingresar</button>
                </div>
        </div>
    </div>
  )
}
