import { GET_PAGEDATA } from '../action';
import { initialState } from './initialState';

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGEDATA: {
      return {
        ...state,
        pageCount : action.payload,
      };
    }
    default:
      return state;
  }
};

export default pageReducer;
