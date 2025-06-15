import React, {Children, useContext, useEffect} from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const CaptainProtectedWrapper = ({children}) => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if(!token) navigate('/captain-login')
    },[token, navigate]);

  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectedWrapper
