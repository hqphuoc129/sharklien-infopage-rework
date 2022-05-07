import { combineReducers } from "redux";
import fetchNewReducers from "../reducers/fetchnew";
import fetchImgReducers from '../reducers/fetchimg';


const allReducers  = combineReducers({
    fetchImg : fetchImgReducers,
    fetchNew : fetchNewReducers,
})


export default allReducers;