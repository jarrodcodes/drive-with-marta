import { combineReducers } from "redux";
import AddUserGPS from './addusergps.js'
import AddUserDestination from './adduserdestination.js';
import AddUserDriveTime from './adduserdrivetime.js';
import AddClosestStation from './addClosestStation.js';

const rootReducer = combineReducers({
    GPS: AddUserGPS,
    Destination: AddUserDestination,
    DriveTime: AddUserDriveTime,
    ClosestStation: AddClosestStation
});

export default rootReducer;