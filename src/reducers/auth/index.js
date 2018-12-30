//@format
import {GET_AUTH_READ} from '../../actions/auth';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_AUTH_READ:
      try {
        console.log('<reducers/auth> reducing read auth... ');
        const evaluated = action.payload;
        return {...state, readAuth: evaluated};
      } catch (e) {
        console.log('<reducers/auth> read auth error: ', e);
      }
      break;

    default:
      return state;
  }
}
