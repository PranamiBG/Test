import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from '../actions';

const initialState = {
  result_array:[],
  isFetching: false,
  error: false
};

export default function fetchReducer(state = initialState, action) {

    switch (action.type) {
      case FETCH_DATA: {
        return {
          ...state,
          isFetching: true
        };
      }

      case FETCH_DATA_SUCCESS: {
        return {
          ...state,
          isFetching: false,
          result_array: action.data
        }
      }

      case FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error:true
      }

      default:
        return state;
    }

}
