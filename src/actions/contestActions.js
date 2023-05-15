import axios from "axios";
import {
  CONTEST_LIST_REQUEST,
  CONTEST_LIST_SUCCESS,
  CONTEST_LIST_ERROR
} from "../constant/contestConstant";

export const listContests = () => async (dispatch) => {
  try {
    dispatch({ type: CONTEST_LIST_REQUEST });
    const { data } = await axios.get("https://kontests.net/api/v1/all");
    const filteredData = await data.filter((e) => e.status === 'BEFORE');
    dispatch({ type: CONTEST_LIST_SUCCESS, payload: filteredData });
  } catch (error) {
    dispatch({
      type: CONTEST_LIST_ERROR,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const siteContests = (id) => async (dispatch) => {

  try {
    dispatch({ type: CONTEST_LIST_REQUEST });
    const { data } = await axios.get(`https://kontests.net/api/v1/${id}`);
    const filteredData = await data.filter((e) => e.status === 'BEFORE');
    filteredData.sort(function(a,b){
      return new Date(a.start_time) - new Date(b.start_time);
    });
    dispatch({ type: CONTEST_LIST_SUCCESS, payload: filteredData });
  } catch (error) {
    dispatch({
      type: CONTEST_LIST_ERROR,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};


