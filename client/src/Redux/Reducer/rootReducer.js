import { combineReducers } from "redux";

import authReducer from "./Auth/auth.reducer";
import subsReducer from "./Subscription/subs.reducer";

const rootReducer = combineReducers({authReducer, subsReducer});

export default rootReducer;