import { combineReducers } from "redux";
import AddUserGPS from './addusergps.js'
import AddUserDestination from './adduserdestination.js';
import AddUserDriveTime from './adduserdrivetime.js';
import AddClosestStationToUser from './addcloseststationtouser.js';
import AddMARTATime from './addmartatime.js';

const rootReducer = combineReducers({
    GPS: AddUserGPS,
    Destination: AddUserDestination,
    DriveTime: AddUserDriveTime,
    ClosestStationToUser: AddClosestStationToUser,
    MartaTime: AddMARTATime
});

export default rootReducer;