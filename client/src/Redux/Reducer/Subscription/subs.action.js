import axios from "axios"

// Redus types
import { GET_SUBSCRIPTION, POST_SUBSCRIPTION } from "./subs.type"

export const getSubs = (no) => async (dispatch) => {
    try {
        const subscription = await axios({
            method: "GET",
            url: `http://localhost:3001/subs/${no}`
        })

        return dispatch({ type: GET_SUBSCRIPTION, payload: subscription.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const postSubs = (subsData) => async (dispatch) => {
    try {
        const subs = await axios({
            method: "POST",
            url: `http://localhost:3001/subs/new`
        })

        return dispatch({ type: POST_SUBSCRIPTION, payload: { ...subsData } });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}