import axios from "axios";
import {
  CONTEST_LIST_REQUEST,
  CONTEST_LIST_SUCCESS,
  CONTEST_LIST_ERROR
} from "../constant/contestConstant";
import { useParams } from "react-router-dom";

export const listContests = () => async (dispatch) => {
  try {
    dispatch({ type: CONTEST_LIST_REQUEST });
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

export const siteContests = (id) => async (dispatch) => {
  
  // const {id}=param;
  console.log(id);
  try {
    dispatch({ type: CONTEST_LIST_REQUEST });
    const { data } = await axios.get(`https://kontests.net/api/v1/${id}`);
    const filteredData = await data.filter((e) => e.status === 'BEFORE');
    // filteredData.reverse();
    console.log(filteredData);
    filteredData.sort(function(a,b){
      return new Date(a.start_time) - new Date(b.start_time);
    });
    console.log(filteredData);
    dispatch({ type: CONTEST_LIST_SUCCESS, payload: filteredData });
  } catch (error) {
    dispatch({
      type: CONTEST_LIST_ERROR,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const userDetails = ()=> async function codechef() {
  console.log("YES");
  const url = await axios.get("http://localhost:8000/userDetails");
  console.log(url)
    // return {
    //   status: "OK",
    //   rating: rating,
    //   max_rating: maxRating,
    //   global_rank: globalRank,
    //   country_rank: countryRank,
    //   contests: getContestsDetails(),
    //   problems_solved: getProblemsSolved()
    // };
}

``
