import { Box } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

const PrivateRoute = ({children}) => {

    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to='/login'></Navigate>
    }

  return children
}

export default PrivateRoute
