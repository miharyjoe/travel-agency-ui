import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './config/ApiContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <DataProvider>
    <StrictMode>
    <BrowserRouter>
        <ColorModeScript />
        <App />
     </BrowserRouter>
  </StrictMode>
  </DataProvider>
);
