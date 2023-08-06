import axios from 'axios'

// Redux types
import { DELETE_STRIPE } from './stripe.types'

export const delStripe = (id) => async (dispatch) => {
    try {
        const stripe = await axios({
            method: "DELETE",
            url: `http://localhost:3001/stripe/del/${id}`
        })

        return dispatch({ type: DELETE_STRIPE, payload: stripe.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}