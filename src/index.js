import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { BrowserRouter as Route } from 'react-router-dom'




ReactDOM.render(
 <StrictMode>
   <Route>
     <App />
   </Route>
 </StrictMode>,
  document.getElementById('root')
);


