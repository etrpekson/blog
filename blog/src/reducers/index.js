import { combineReducers } from 'redux';

import authReducer from './authReducer';

// whatever keys we provide to this object are going to represent the keys that exist inside of our state object
export default combineReducers({ 
    auth: authReducer
});