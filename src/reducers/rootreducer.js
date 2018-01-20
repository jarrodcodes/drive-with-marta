import { combineReducers } from "redux";
import AddUserGPS from './addusergps.js'
import AddUserDestination from './adduserdestination.js';
import AddUserDriveTime from './adduserdrivetime.js';
import AddClosestStationToUser from './addcloseststationtouser.js';
import AddMARTATimePrimary from './addmartatimeprimary.js';
import AddUserDrivingTimeToStation from './adduserdrivingtimetostation.js';
import AddClosestStationToDestination from './addcloseststationtodestination.js';

const rootReducer = combineReducers({
    GPS: AddUserGPS,
    Destination: AddUserDestination,
    DriveTime: AddUserDriveTime,
    ClosestStationToUser: AddClosestStationToUser,
    ClosestStationToDestination: AddClosestStationToDestination,
    MartaTime: AddMARTATimePrimary,
    DrivingTimeToStation: AddUserDrivingTimeToStation
});

export default rootReducer;