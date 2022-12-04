import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});