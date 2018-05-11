import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
    // dispatch an action after this api request has been completed:                
    const res = await axios.get('/api/current_user'); // communicate with express api in server
    console.log(`response: ${res}`);
    dispatch({ type: FETCH_USER, payload: res.data }); // once we have response, only then will we dispatch our action
};
