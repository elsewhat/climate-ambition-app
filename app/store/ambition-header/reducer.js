import { handleActions } from 'redux-actions';
import {
  fetchAmbitionHeaders,
  fetchAmbitionHeadersRequested,
  fetchAmbitionHeadersSucceeded,
  fetchAmbitionHeadersFailed
} from './actions';
import { stateKeys } from '../../types';

const defaultState = {
    fetching: false,
    data: [],
  };
  

  export default handleActions({
    [fetchAmbitionHeadersRequested]: state => ({
      ...state,
      fetching: true,
    }),
    [fetchAmbitionHeadersSucceeded]: (state, action) => ({
      fetching: false,
      data: action.payload,
    }),
    [fetchAmbitionHeadersFailed]: state => ({
      ...state,
      fetching: false,
    }),
  }, defaultState);

  export const getIsFetching = state => state[stateKeys.AMBITIONHEADER].fetching;
  export const getAmbitionHeadersAsList = state => state[stateKeys.AMBITIONHEADER].data || [];