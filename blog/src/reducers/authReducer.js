import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // return user model if user is logged in, otherwise, return false
    default:
      return state;
  }
}
