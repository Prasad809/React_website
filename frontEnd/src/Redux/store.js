
import rootReducers from './indexReducers';
import { thunk } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(rootReducers, applyMiddleware(thunk));