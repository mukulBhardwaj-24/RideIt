import React, {Children, useContext, useEffect} from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CaptainProtectedWrapper = ({children}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(true);

    const token = localStorage.getItem('token');

    useEffect(() => {
        if(!token) navigate('/captain-login')
    },[token, navigate]);

    axios.post(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200)
        {
            setLoading(false);
        }
    }
    ).catch((error) => {
        console.error("Error verifying captain:", error);
        localStorage.removeItem('token');
        navigate('/captain-login');
    });

    if(loading)
    {
      return (
        <div className='flex justify-center items-center h-screen'>
            <img className='w-16' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        </div>
      )
    }

  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectedWrapper
