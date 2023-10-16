import { LOADED, LOADING } from "../actions/action-type";

const initialState =  {
    isLoading: false,
};

  const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
          return {
            ...state,
            isLoading: true,
          }

        case LOADED:
          return {
            ...state,
            isLoading: false,
          }

        default:
          return state;
    }
  }


export default loadingReducer