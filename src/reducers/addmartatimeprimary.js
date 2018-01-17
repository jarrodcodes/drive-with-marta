
import { getMARTATravelTimePrimary } from '../actions/getMARTATravelTimePrimary.js';

export default function (state = [], action) {
  switch (action.type) {
    case getMARTATravelTimePrimary:
      return [action.payload]
    default:
      return state
  }
}