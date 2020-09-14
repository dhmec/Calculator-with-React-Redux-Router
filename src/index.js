import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Calculator.css';
import Calculator from './components/Calculator';



ReactDOM.render(
  <React.StrictMode>
    <Calculator />    
  </React.StrictMode>,
  document.getElementById('root')
);