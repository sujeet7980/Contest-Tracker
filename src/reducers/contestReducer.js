import {
    CONTEST_LIST_REQUEST,CONTEST_LIST_SUCCESS,CONTEST_LIST_ERROR
  } from "../constant/contestConstant";
  
  export const contestReducer = (state = { contests: [] }, action) => {
    switch (action.type) {
      case CONTEST_LIST_REQUEST:
        return { loading: true, contests: [] };
      case CONTEST_LIST_SUCCESS:
        return { loading: false, contests: action.payload };
      case CONTEST_LIST_ERROR:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  