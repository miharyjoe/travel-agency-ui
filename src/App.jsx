import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Home } from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Redirect from "./route/Redirect";
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import TravelCard from './pages/travel/TravelCard';



function App() {
  return (
    <ChakraProvider theme={theme}>
    <Routes>
        <Route exact path="/" element={<Redirect to='/home'/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/travels" element={<TravelCard/>} />
    </Routes>
    </ChakraProvider>
  );
}

export default App;
