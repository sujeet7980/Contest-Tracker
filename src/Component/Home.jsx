import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Loader from "./Loader";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { listContests } from "../actions/contestActions";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { format } from "date-fns";
const Home = () => {
  const dispatch = useDispatch();
  const contestList = useSelector((state) => state.contestList);
  const { contests, loading, error } = contestList;
  const formatDate = (sec) => {
    sec = Number(sec);
    var y = Math.floor(sec / 31536000); //<<years
    var w = Math.floor(y * 31536000);
    var w1 = Math.floor(w - sec);
    w = Math.floor(Math.abs(w1) / 604800); //<<weeks
    var d = Math.floor(Math.abs(w) * 604800);
    var d1 = Math.floor(Math.abs(d) - Math.abs(w1));
    d = Math.floor(Math.abs(d1) / 86400);
    d = Math.abs(d); //<<day
    var h = Math.floor(d * 86400);
    h = Math.floor(h - Math.abs(d1));
    h = Math.floor(Math.abs(h) / 3600); //<<hours
    var m = Math.floor((sec % 3600) / 60); //<<minutes

    var yDisplay = y > 0 ? y + (y === 1 ? " year " : " years ") : "";
    var dDisplay = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
    var hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
    let time = yDisplay + dDisplay + hDisplay + mDisplay;
    if (time[time.length - 1] === "-") time.slice(0, -1);
    return yDisplay + dDisplay + hDisplay + mDisplay;
  };

  useEffect(() => {
    dispatch(listContests());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" message={error} />
      ) : (
        <MDBRow className="row-cols-1 row-cols-md-1 g-2 mt-3">
          {contests.map((contest, index) => (
            <MDBCol key={index} className="justify-content-center" style={{width:'85%'}}>
              <MDBCard className=" w-75 d-flex flex-row gap-5">
                <MDBCardImage
                  src={`/images/${contest.site}.png`}
                  alt="..."
                  position="top"
                  className="w-25 p-3"
                  style={{width:'35%'}}
                  
                />
                <MDBCardBody className="w-75">
                  <MDBCardTitle>
                    <Link to={contest.url} target="_blank" rel="noreferrer noopener">{contest.name}</Link>
                  </MDBCardTitle>

                  <Table borderless size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Start Time:</td> 
                        <td>{format(
                          new Date(contest.start_time),
                          "hh:mm a dd-MM-yyyy"
                        )} </td> 
                      </tr>
                      <tr>
                        <td>End Time:</td> 
                        <td>{format(
                          new Date(contest.end_time),
                          "hh:mm a dd-MM-yyyy"
                        )}</td> 
                      </tr>
                      <tr>
                        <td>Duration:</td> 
                        <td>{formatDate(contest.duration)}</td> 
                      </tr>
                      <tr>
                        <td>Platform:</td>
                        <td>{contest.site}</td>
                      </tr>
                      <tr>
                        <td>Status:</td>
                        <td>{contest.status}</td>
                      </tr>
                    </tbody>
                  </Table>
                  {/* <div className="d-flex flex-column">
                    <div className="d-flex justify-content-spacebetween align-items-center">
                      <span>Start Time:</span>
                      <span>
                        {format(
                          new Date(contest.start_time),
                          "hh:mm:ss a dd-MM-yyyy"
                        )}
                      </span>
                    </div>
                    <div className="d-flex">
                      <span>End Time:</span>
                      <span className="ml-3">
                        {format(
                          new Date(contest.end_time),
                          "hh:mm:ss a dd-MM-yyyy"
                        )}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Duration:</span>
                      <span>{formatDate(contest.duration)}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Platform:</span>
                      <span>{contest.site}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Status:</span>
                      <span>{contest.status}</span>
                    </div>
                  </div> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      )}
    </>
  );
};

export default Home;
