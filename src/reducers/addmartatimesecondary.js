
import { getMARTATravelTimeSecondary } from '../actions/getMARTATravelTimeSecondary.js';

export default function (state = [], action) {
  switch (action.type) {
    case getMARTATravelTimeSecondary:
      return [action.payload]
    default:
      return state
  }
}