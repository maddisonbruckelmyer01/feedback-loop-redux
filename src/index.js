import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


const feedbackReducer = (state = [], action) => {
    if (action.type === 'GET_FEEDBACK') {
        return action.payload;
    }
    return state
}

const inputReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_STATE') {
        return action.payload
    }
    return state 
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
        inputReducer
    }),
    applyMiddleware(logger)
);




ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
