import axios from 'axios';
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from './userTypes';

function fetchUserRequest() {
  return { type: FETCH_USER_REQUEST };
}
function fetchUserSuccess(users) {
  return { type: FETCH_USER_SUCCESS, payload: users };
}
function fetchUserFailure(errMess) {
  return { type: FETCH_USER_FAILURE, payload: errMess };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => dispatch(fetchUserSuccess(res.data)))
      .catch((err) => dispatch(fetchUserFailure(err.message)));
  };
}
