import './App.css';
import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login';
import Todos from './Components/SingleTodos';
import Logout from './Components/Logout';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import SingleTodo from './Components/SingleTodos';
import PrivateRoute from './Contexts/PrivateRoute';


function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Routes>
         {/* <Route path='/' element={<Navbar/>}></Route> */}
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/todos-list' element={
         <PrivateRoute>
            <TodoList/>
          </PrivateRoute>}></Route>
         <Route path='/todo/:id' element={
         <PrivateRoute>
            <SingleTodo/>
         </PrivateRoute>}></Route>
         <Route path='/logout' element={
         <PrivateRoute>
            <Logout/>
         </PrivateRoute>}></Route>
       </Routes>
    </Box>
  );
}

export default App;
