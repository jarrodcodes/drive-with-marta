import { addUserDestination } from '../actions/addUserDestination.js';

export default function(state = [], action) {
  switch (action.type) {
    case addUserDestination:
      return [action.payload];
  }
  return state;
}