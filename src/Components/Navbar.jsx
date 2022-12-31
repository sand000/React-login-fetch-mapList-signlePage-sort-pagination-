import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

const Navbar = () => {
     
    const {isAuth} = useContext(AuthContext)
  return (
    <Flex bg={'teal'} p='10px' fontWeight='bold' color='white' justifyContent='space-evenly'>
      <Link to='/'>Home</Link>
      {isAuth? <Link to='logout'>Logout</Link>:<Link to='/login'>Login</Link>}
      <Link to='/todos-list'>Todos List</Link>
    </Flex>
  )
}

export default Navbar
