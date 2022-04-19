import { combineReducers } from "redux";
import fetchReducers from '../reducers/fetch';

const allReducers  = combineReducers({
    fetch : fetchReducers,
})


export default allReducers;