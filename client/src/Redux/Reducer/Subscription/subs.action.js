import axios from "axios";

// Redus types
import { GET_SUBSCRIPTION, POST_SUBSCRIPTION } from "./subs.type";

export const getSubs = (no) => async (dispatch) => {
  try {
    const subscription = await axios({
      method: "GET",
      url: `http://localhost:3001/subs/${no}`,
    });

    return dispatch({ type: GET_SUBSCRIPTION, payload: subscription.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
export const postSubs = (subsData) => async (dispatch) => {
  try {
    console.log(subsData);
    const subs = await axios({
      method: "POST",
      url: `http://localhost:3001/subs/new`,
      data: { subsData: subsData },
    });

    return dispatch({ type: POST_SUBSCRIPTION, payload: { ...subs.data }, message:"details added" });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
