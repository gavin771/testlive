import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/me');

  dispatch({ type: FETCH_USER, payload: res.data });
}

export const saveTestRailData = (values) => async dispatch => {
  console.log(values)
  const res = await axios.get('/api/me');

  dispatch({ type: FETCH_USER, payload: res.data });
}
