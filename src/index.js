import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';



const inputReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return { ...state, feeling: action.payload };
        case 'SET_UNDERSTANDING':
            return { ...state, understanding: action.payload };
        case 'SET_SUPPORT':
            return { ...state, support: action.payload };
        case 'SET_COMMENTS':
            return { ...state, comments: action.payload };
        default:
            return state;
    }
}
const feedbackReducer = (state = [], action) => {
    if (action.type === 'GET_FEEDBACK') {
        return action.payload;
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
