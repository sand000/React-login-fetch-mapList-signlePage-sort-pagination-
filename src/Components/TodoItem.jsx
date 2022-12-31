import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    SimpleGrid,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
  
  export default function TodoItem({id, title, completed}) {
    
    return (
        
            <Center py={6}>
                <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                    fontSize={'sm'}
                    fontWeight={500}
                    bg={useColorModeValue('green.50', 'green.900')}
                    p={2}
                    px={3}
                    color={'green.500'}
                    rounded={'full'}>
                    Title: {title}
                    </Text>
                    
                </Stack>
        
                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <List spacing={3}>
                        <Link to={`/todo/${id}`}>
                           <ListItem fontWeight={'bold'}>
                             Id:{id}
                           </ListItem>
                        </Link>
                    <ListItem>
                        Status: {completed? <Text>Complted</Text>:<Text>Not Complted</Text>}
                    </ListItem>
                    
                    </List>
        
                    <Button
                    mt={10}
                    w={'full'}
                    bg={'green.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                        bg: 'green.500',
                    }}
                    _focus={{
                        bg: 'green.500',
                    }}>
                    Start your trial
                    </Button>
                </Box>
                </Box>
            </Center>
      
    );
  }