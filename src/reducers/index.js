import {combineReducers} from 'redux';
import signInReducer from "./auth/signInReducer";
import signUpReducer from "./auth/signUpReducer";
import passRecReducer from "./auth/passRecReducer";
import {exReducer} from "./ex/";

const combineReducer = combineReducers({
    signInReducer,
    signUpReducer,
    passRecReducer,
    exReducer
})

export default combineReducer;