import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Calculator.css';
import Calculator from './components/Calculator';
import Singleinputcalculator from './components/Singleinputcalculator';


ReactDOM.render(
  <React.StrictMode>
    <Calculator />
    <Singleinputcalculator />
  </React.StrictMode>,
  document.getElementById('root')
);