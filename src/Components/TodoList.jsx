import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getData } from './Apis';

import TodoItem from './TodoItem';

const TodoList = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]); 
    const [sortBy, setSortBy] = useState("asc");
    const [searchParams, setSearchParams] = useSearchParams();
    const initPage = Number(searchParams.get("page")) || 1;
    const [page, setPage] = useState(initPage);

    useEffect(()=>{
        setIsLoading(true)
        getData({page, sortBy})
        .then((res)=>{
            setIsLoading(false)
            setData(res);
        })
    },[page, sortBy])

    useEffect(()=>{
        setSearchParams({page})
    }, [page])

    console.log(data);
    console.log(page);

    if(isLoading){
        return <Heading>Loading.....</Heading>
    }
    return (
        <Box>

            {/* {sortBy? <Button>DESC</Button>:<Button>ASC</Button>} */}
            
            <Button onClick={()=>setSortBy(sortBy==="asc"? "descv":"asc")}>
                {sortBy==="asc"? "desc":"asc"}</Button>

            <SimpleGrid columns={3}>
                {data?.map((e)=>{
                    return(
                        <Box>
                        <TodoItem id={e.id}  key={e.id} title={e.title} completed={e.completed}/>   
                        </Box>
                    )
                })}            
            </SimpleGrid>

            <Box>
                <Button onClick={()=>setPage(page-1)} disabled={page===1}>PREV</Button>
                <Button>{page}</Button>
                <Button  onClick={()=>setPage(page+1)}>NEXT</Button>
            </Box>
        </Box>
      );
}

export default TodoList;
