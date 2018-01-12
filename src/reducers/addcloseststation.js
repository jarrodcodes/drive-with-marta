import { getClosestStation } from '../actions/getClosestStation.js';

export default function (state = [], action) {
  switch (action.type) {
    case getClosestStation:
      return [action.payload]
    default:
      return state
  }
}