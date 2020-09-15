import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Calculator.css';
import Calculator from './components/Calculator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import pastCalculateReducer from './reducers/pastCalculate';
import PastCalculateList from './components/PastCalculate'


const store = createStore(
  pastCalculateReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




ReactDOM.render(
  <Provider store={store}>
    <Calculator />
    <PastCalculateList />    
  </Provider>,
  document.getElementById('root')
);