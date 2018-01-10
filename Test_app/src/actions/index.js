//import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";


export function fetchData() {
  return (dispatch) => {
    dispatch(getData());
    fetch("https://api.myjson.com/bins/fz62x")
    .then(res => res.json())
    .then(json => dispatch(getDataSuccess(json)))
    .catch(err => dispatch(getDataFailure(err)))
  }
}

function getData() {
  return {
    type: FETCH_DATA
  }
};

function getDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data
  }
};

function getDataFailure() {
  return {
    type: FETCH_DATA_FAILURE,

  };
}
