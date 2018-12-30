//@format
import axios from 'axios';
import {API_BASE} from '../../config';

//we need to make sure that this action creator is wired to redux
export const GET_ALL_SOOP = 'get_all_soop';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export function getSoop(auth) {
  console.log('<actions/soop> requesting all soop...');
  const readToken = auth.readAuth.access_token;
  const readTokenType = auth.readAuth.token_type;
  const readAuth = readTokenType + ' ' + readToken;
  const headers = {
    Authorization: readAuth
  };

  const request = axios.get(`${API_BASE}api/soops/get/all/`, {
    headers: headers
  });
  return dispatch => {
    console.log('<actions/soop> dispatching all soop...');
    request.then(({data}) => {
      dispatch({type: GET_ALL_SOOP, payload: data});
    });
  };
}
