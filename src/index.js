import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './fonts/TT Norms sv/TTNorms-Black.otf';
import './fonts/TT Norms sv/TTNorms-Bold.otf';
import './fonts/TT Norms sv/TTNorms-Light.otf';
import './fonts/TT Norms sv/TTNorms-Regular.otf';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter> 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
