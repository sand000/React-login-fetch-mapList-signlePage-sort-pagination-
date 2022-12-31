import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
  
const getUser = ({email, password}) => {
    return fetch('https://reqres.in/api/login', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email,password})
    })
}

  export default function Login() {

    const {LoginUser, ToggleAuth, LogoutUser, email, token, isAuth} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignIn = () => {
       getUser({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
       })
       .then((res)=>res.json())
       .then((res)=>{
          LoginUser('eve.holt@reqres.in', res.token)
       })

      navigate('/logout')
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input 
                  type="email"
                  />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={handleSignIn}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
