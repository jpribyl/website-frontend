//@format
import axios from 'axios';
import {API_BASE} from '../../config';

//we need to make sure that this action creator is wired to redux
export const GET_ALL_SOOP = 'get_all_soop';
export const LIKE_SOOP = 'like_soop';
export const DISLIKE_SOOP = 'dislike_soop';

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

export function likeSoop(auth, data) {
  console.log('<actions/soop> liking soop...');

  const readToken = auth.readAuth.access_token;
  const readTokenType = auth.readAuth.token_type;
  const readAuth = readTokenType + ' ' + readToken;

  const headers = {
    Authorization: readAuth
  };

  const request = axios.put(`${API_BASE}api/soops/put/like`, data, {
    headers: headers
  });

  return dispatch => {
    console.log('<actions/soop> dispatching soop like...');
    request.then(({data}) => {
      dispatch({type: LIKE_SOOP, payload: data});
    });
  };
}

export function dislikeSoop(auth, data) {
  console.log('<actions/soop> disliking soop...');

  const readToken = auth.readAuth.access_token;
  const readTokenType = auth.readAuth.token_type;
  const readAuth = readTokenType + ' ' + readToken;

  const headers = {
    Authorization: readAuth
  };

  const request = axios.put(`${API_BASE}api/soops/put/dislike`, data, {
    headers: headers
  });

  return dispatch => {
    console.log('<actions/soop> dispatching soop dislike...');
    request.then(({data}) => {
      dispatch({type: DISLIKE_SOOP, payload: data});
    });
  };
}
