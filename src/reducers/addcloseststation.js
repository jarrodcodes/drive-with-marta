import { getClosestStation } from '../actions/getClosestStation.js';

export default function (state = [], action) {
  switch (action.type) {
    case getClosestStation:
      const newState = {
        ...state,
        ClosestStation: action.payload,
      }
      return newState
    default:
      return state
  }
}