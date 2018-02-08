import { getMARTAOnlyTime } from '../actions/getMARTAOnlyTime.js';

export default function (state = [], action) {
  switch (action.type) {
    case getMARTAOnlyTime:
      const newState = {
        ...state,
        MARTAOnlyTime: action.payload,
      }
      return newState
    default:
      return state
  }
}