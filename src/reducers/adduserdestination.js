import { getUserDestination } from '../actions/getUserDestination.js';

export default function (state = [], action) {
  switch (action.type) {
    case getUserDestination:
      return [action.payload]
    default:
      return state
  }
}