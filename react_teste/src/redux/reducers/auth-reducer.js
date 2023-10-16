import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_FAILURE } from "../actions/action-type";

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };

  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.user,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.error,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: null,
        };
      case REGISTER:
        return {
          ...state,
          error: null,
        }
      case REGISTER_FAILURE:
        return {...state, error: action.error}
      default:
        return state;
    }
  };

  export default authReducer;