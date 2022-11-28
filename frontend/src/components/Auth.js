import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Auth = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    if(currentUser!==null)
    return children;

    else return <Navigate to='/login' />
}

export default Auth