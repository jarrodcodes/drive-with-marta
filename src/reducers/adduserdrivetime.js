import { getUserDrivingTime } from '../actions/getUserDrivingTime.js';

export default function (state = [], action) {
  switch (action.type) {
    case getUserDrivingTime:
      return {...state,
         DriveTime: action.payload
      }
    default:
      return state
  }
}