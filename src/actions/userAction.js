import axios from "axios";
import {
  USER_REGISTER_REQUEST,USER_REGISTER_FAIL,USER_REGISTER_SUCCESS
} from "../constant/userConstant";

export const listContests = () => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_ });
    const { data } = await axios.get("https://kontests.net/api/v1/all");
    const filteredData = await data.filter((e) => e.status === 'BEFORE');
    console.log(data);
    dispatch({ type: CONTEST_LIST_SUCCESS, payload: filteredData });
  } catch (error) {
    dispatch({
      type: CONTEST_LIST_ERROR,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
