import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Calculator.css';
import Calculator from './components/Calculator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import pastCalculateReducer from './reducers/pastCalculate';
import PastCalculateList from './components/PastCalculate'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';


const store = createStore(
  pastCalculateReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <Route path = '/' component = {Home} exact/>
      <Route path = '/calculator' component = { Calculator } />
      <Route path = '/past-calculate' component = { PastCalculateList } />                
    </Router>        
  </Provider>,
  document.getElementById('root')
);