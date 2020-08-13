import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import rootReducer from '../reducers/index'

const initState = {}; 

const middleWare = [thunk]; 

const store = createStore(rootReducer, initState, applyMiddleware(...middleWare));

export default store; 