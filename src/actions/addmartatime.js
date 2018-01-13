
import { getMARTATravelTime } from '../actions/getMARTATravelTime.js';

export default function (state = [], action) {
  switch (action.type) {
    case getMARTATravelTime:
      return [action.payload]
    default:
      return state
  }
}