import { getUserDestination } from '../actions/getUserDestination.js';

export default function (state = [], action) {
  switch (action.type) {
    case getUserDestination:
      const newState = {
        ...state,
        Destination: action.payload,
      }
    default:
      return state
  }
}