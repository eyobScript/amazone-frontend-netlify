import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './ContextProvider/ContextProvider';
import { initialState, reducer } from './Utility/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ContextProvider  reducer={reducer} initialState={initialState}> 
       <App />
   </ContextProvider>
  </React.StrictMode>
);

