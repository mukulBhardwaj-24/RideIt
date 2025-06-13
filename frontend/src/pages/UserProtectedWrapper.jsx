import React, {Children, useContext} from 'react'
import { UserDataContext } from '../context/UserContext'
import { isRouteErrorResponse, useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({Children}) => {
    const navigate = useNavigate();
    const {user} = useContext(UserDataContext);

    if(!user.email)
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
