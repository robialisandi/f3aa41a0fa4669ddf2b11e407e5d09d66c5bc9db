import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cart from './cart';

const rootReducer = combineReducers({
  routing: routerReducer,
  cart,
});

export default rootReducer;
