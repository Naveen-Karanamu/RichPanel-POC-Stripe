import { GET_SUBSCRIPTION, POST_SUBSCRIPTION } from "./subs.type";

const INITIAL_STATE = {
    subsctipitons: [],
};

const subsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SUBSCRIPTION:
            return { ...state, subsctipitons: action.payload };

        case POST_SUBSCRIPTION:
            return {
                ...state,
                // reviews:state.reviews.push(action.payload)
                subsctipitons:[...state.subsctipitons, action.payload]
            }

        default:
            return { ...state }
    }
}

export default subsReducer;