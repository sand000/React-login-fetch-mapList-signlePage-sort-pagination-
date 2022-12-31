import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

const Logout = () => {

    const {email, token, LogoutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () =>{
        LogoutUser();
        navigate('/login')
    }
  return (
    <Box mt={'100px'}>
        <Button onClick={handleLogout}>Logout</Button>
        <Box  fontWeight={'bold'}>TOKEN: {token}</Box>
        <Box fontWeight={'bold'}>EMAIL: {email}</Box>
     
    </Box>
  )
}

export default Logout
