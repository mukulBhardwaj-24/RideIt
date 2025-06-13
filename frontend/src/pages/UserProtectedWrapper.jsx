import React, {Children, useContext} from 'react'
import { UserDataContext } from '../context/UserContext'
import { isRouteErrorResponse, useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({Children}) => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    if(!token)
    {
        navigate('/login');
    }

  return (
    <>
        {Children}
    </>
  )
}

export default UserProtectedWrapper
