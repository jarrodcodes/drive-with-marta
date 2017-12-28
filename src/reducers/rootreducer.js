import { combineReducers } from "redux";
import GetUserGPS from './getusergps.js'
import GetUserDestination from './getuserdestination.js';

const rootReducer = combineReducers({
    GPS: GetUserGPS,
    Destination: GetUserDestination
});

export default rootReducer;