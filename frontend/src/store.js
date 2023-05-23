/* import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // the middleware

const reducer = combineReducers({}); // this will contain our reducers

const initialState = {};

const middleware = {thunk};

const store = configureStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store; */