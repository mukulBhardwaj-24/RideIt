import React, {Children, useContext, useEffect} from 'react'
import { UserDataContext } from '../context/UserContext'
import { isRouteErrorResponse, useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({children}) => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if(!token) navigate('/login')
    },[token, navigate]);

  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper
