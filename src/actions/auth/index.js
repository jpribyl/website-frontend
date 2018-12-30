//@format
import axios from 'axios';
import {API_BASE} from '../../config';

//we need to make sure that this action creator is wired to redux
export const GET_AUTH_READ = 'get_auth_read';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export function getAuthRead() {
  console.log('<actions/auth> requesting read auth...');
  //const request = axios.get(`https://www.google.com`, {});
  const request = axios.get(`${API_BASE}api/auth/read/`, {});
  //const request = fetch(`https://xkcd.com/info.0.json`);
  return dispatch => {
    console.log('<actions/auth> dispatching read auth...');
    request
      .then(({data}) => {
        dispatch({type: GET_AUTH_READ, payload: data});
      })
      .catch(error => {
        console.log('error: ', error);
      });
  };
}
