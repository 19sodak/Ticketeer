import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "../ActionTypes";

// Register Event
export const createEvent = (eventData, history) => dispatch => {
  axios
    .post("/api/events/hostEvent", eventData)
    .then(res => history.push("/getEvent/" + res.data._id)) // re-direct to login on successful registered event
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const editEvent = (eventData, history) => dispatch => {
  history.push("/edit/" + eventData._id)
}

export const getEvent = (eventId, callback, errorcallback) => dispatch => {
  axios
    .get("/api/events/getEvent", {
      params: {
        id : eventId
      }
    })
    .then(res => {
      if (callback != null){
        callback(res);
      }
    })
    .catch(err => {
      // catch error
      if(errorcallback != null){
        errorcallback(err);
    }
  });
}

export const submitEdit = (eventData, eventId, history) => dispatch => {
  history.push("/")
}