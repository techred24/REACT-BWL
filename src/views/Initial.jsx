import React, { useState } from 'react'
import { Login } from '../components/Login'
import { SignUp } from '../components/SignUp'

export const Initial = () => {
  const [inLoginPage, setInLoginPage] = useState(true);
  return (
    <div className='initial-page'>
      {
        inLoginPage ?
        <Login setInLoginPage={setInLoginPage} /> :
        <SignUp setInLoginPage={setInLoginPage}/>
      }
    </div>
  )
}
