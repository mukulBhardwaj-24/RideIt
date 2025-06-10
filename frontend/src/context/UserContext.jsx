import React, { createContext, useState } from 'react'

const UserContext = ({children}) => {

const UserDataContext = createContext();

const [user, setUser] = useState({
  email: '',
  fullName: {
    firstName: '',
    lastName: ''
  }
})

  return (
    <div>
      <UserDataContext.Provider value={{user, setUser}}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
