import { createStore } from 'redux';
import todoReducers from './reducers/todoReducers';

export default createStore(todoReducers);
