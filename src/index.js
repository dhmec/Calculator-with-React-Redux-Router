import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Calculator.css';
import Calculator from './components/Calculator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import newPastCalculate from './actions/pastCalculate';
import pastCalculateReducer from './reducers/pastCalculate';


const store = createStore(
  pastCalculateReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch( newPastCalculate( "first result" ) );


ReactDOM.render(
  <Provider store={store}>
    <Calculator />    
  </Provider>,
  document.getElementById('root')
);