import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getDataById } from './Apis';

const SingleTodo = () => {

  const params = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    getDataById(params.id)
      .then((res)=>{
        setLoading(false);
        setData(res)
      })
  },[params.id])

  if(loading){
    return <Heading>Loading.......</Heading>
  }
  return (
    <Box mt={'20px'}>
      <Link to='/todos-list'>
        <Button>Go Back</Button>
      </Link>
      <Box mt={'100px'}>
        <Heading>{data.title}</Heading>
      </Box>
    </Box>
  )
}

export default SingleTodo
