import { getUserDrivingTime } from '../actions/getUserDrivingTime.js';

export default function (state = [], action) {
  switch (action.type) {
    case getUserDrivingTime:
      return [action.payload]
    default:
      return state
  }
}