import { combineReducers } from "redux";
import AddUserGPS from './addusergps.js'
import AddUserDestination from './adduserdestination.js';
import AddUserDriveTime from './adduserdrivetime.js';
import AddClosestStation from './addcloseststation.js';
import AddMARTATime from './addmartatime.js';

const rootReducer = combineReducers({
    GPS: AddUserGPS,
    Destination: AddUserDestination,
    DriveTime: AddUserDriveTime,
    ClosestStation: AddClosestStation,
    MartaTime: AddMARTATime
});

export default rootReducer;