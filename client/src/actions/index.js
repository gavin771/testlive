import axios from 'axios';
import { SubmissionError } from 'redux-form'
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/me');

  dispatch({ type: FETCH_USER, payload: res.data });
}

export const saveTestRailData = (values) => async dispatch => {

  try {
    const res = await axios.post('/api/me/testrail', values);
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    throw new SubmissionError({ _error: err.response.data.error })
  }

}
