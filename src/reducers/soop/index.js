//@format
import {GET_ALL_SOOP} from '../../actions/soop';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ALL_SOOP:
      try {
        console.log('<reducers/soop> reducing all soop... ');
        const evaluated = JSON.parse(action.payload);
        return {...state, allSoop: evaluated};
      } catch (e) {
        console.log('<reducers/visits/index.js> all soop error: ', e);
      }
      break;

    default:
      return state;
  }
}
