import _ from 'lodash';
import { GET_TODOS, GET_ACTIVE_TODOS, GET_COMPLETED_TODOS } from '../actions/TodoActions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_TODOS:
      return _.mapKeys(action.payload.data.slice(0, 10), 'id');
    default:
      return state;
  }
}
