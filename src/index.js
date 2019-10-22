import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './redux/reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'; //debug tool

const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),//debug in progress
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
