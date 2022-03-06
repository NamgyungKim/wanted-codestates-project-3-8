import { GET_DATA, TURN_OFF_OBSERVE } from '../action';

const initialState = {
  data: [],
  isLoaded: false,
};

export const getApiDataHandler = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: [...state.data].concat(action.payload.data),
        isLoaded: action.payload.isLoaded,
      };
    case TURN_OFF_OBSERVE:
      return {
        ...state,
        isLoaded: action.payload.isLoaded
      }
    default:
      return state;
  }
};
