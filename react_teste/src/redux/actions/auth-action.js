import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from './action-type';


const baseUri = 'http://127.0.0.1:5000/'
export const login = (userData) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    axios
      .post(`${baseUri}login`, userData)
      .then((response) => {
        dispatch({ type: LOGIN_SUCCESS, user: response.data });
        console.log(response.data)
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)

      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: LOGIN_FAILURE, error: error.message });
      });
  };
};


export const refreshAndCheckAuthToken = () => {
  const refreshToken = localStorage.getItem('refresh_token')
  return (dispatch) => {
    axios.post(`${baseUri}refresh`, refreshToken).then(({data}) => {
      localStorage.setItem('access_token', data.access_token)
    }).catch(() => {
      dispatch({ type : LOGOUT })
      localStorage.clear()
    })

  }
}

export const logout = () => {
  localStorage.clear()
  return (dispatch => {
    dispatch({ type : LOGOUT })
  })
}
