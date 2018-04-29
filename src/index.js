import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import  {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import {Provider}  from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom';

const  store = createStore(rootReducer
    ,composeWithDevTools(
        applyMiddleware(thunk)
    )); 
ReactDOM.render(
    
    <Router>
        <Provider store={store}>
        <App/>
        </Provider>
    </Router>
    
   

, document.getElementById('root'));
registerServiceWorker();
