import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Home } from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Redirect from "./route/Redirect";


function App() {
  return (
    <ChakraProvider theme={theme}>
    <Routes>
        <Route exact path="/" element={<Redirect to='/home'/>}/>
        <Route exact path="/home" element={<Home />} />
    </Routes>
    </ChakraProvider>
  );
}

export default App;
