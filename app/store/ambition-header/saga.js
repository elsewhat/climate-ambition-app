import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';

function* fetchAmbitionHeaders() {
  try {
    yield put(actions.fetchAmbitionHeadersRequested());

    const response = yield call(api.getAmbitionHeaders);

    yield put(actions.fetchAmbitionHeadersSucceeded(response));

  } catch (ex) {

    yield put(actions.fetchAmbitionHeadersFailed());

  }
}


export default function* watchFetchAmbitionHeaders() {
  yield takeLatest(actions.fetchAmbitionHeaders.toString(), fetchAmbitionHeaders);
}