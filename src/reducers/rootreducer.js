import { combineReducers } from "redux";
import AddUserGPS from './addusergps.js'
import AddUserDestination from './adduserdestination.js';
import AddUserDriveTimeToDestination from './adduserdrivetimetodestination.js';
import AddClosestStationToUser from './addcloseststationtouser.js';
import AddMARTATimePrimary from './addmartatimeprimary.js';
import AddUserDrivingTimeToPrimaryStation from './adduserdrivingtimetoprimarystation.js';
import AddClosestStationToDestination from './addcloseststationtodestination.js';
import AddMARTATimeSecondary from './addmartatimesecondary.js';
import AddUserDrivingTimeToSecondaryStation from './adduserdrivingtimetosecondarystation.js';

const rootReducer = combineReducers({
    GPS: AddUserGPS,
    Destination: AddUserDestination,
    DriveTimeToDestination: AddUserDriveTimeToDestination,
    ClosestStationToUser: AddClosestStationToUser,
    ClosestStationToDestination: AddClosestStationToDestination,
    MartaTravelTimePrimary: AddMARTATimePrimary,
    MartaTravelTimeSecondary: AddMARTATimeSecondary,
    DrivingTimeToPrimaryStation: AddUserDrivingTimeToPrimaryStation,
    DrivingTimeToSecondaryStation: AddUserDrivingTimeToSecondaryStation
});

export default rootReducer;