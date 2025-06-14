import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captainData, setCaptainData] = useState({
        fullName: {
            firstName: '',
            lastName: ''
        },
        email: '',
        password: '',
        vehicle: {
            color: '',
            plate: '',
            capacity: '',
            vehicleType: ''
        }
    });

    return (
        <CaptainDataContext.Provider value={{ captainData, setCaptainData }}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext
