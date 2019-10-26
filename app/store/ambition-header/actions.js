import { createAction } from 'redux-actions';

export const fetchAmbitionHeaders = createAction('AmbitionHeader/AMBITIONHEADER', payload => ({ ...payload }));
export const fetchAmbitionHeadersRequested = createAction('AmbitionHeader/AMBITIONHEADER_REQUESTED', payload => ({ ...payload }));
export const fetchAmbitionHeadersSucceeded = createAction('AmbitionHeader/AMBITIONHEADER_SUCCEEDED', payload => ({ ...payload }));
export const fetchAmbitionHeadersFailed = createAction('AmbitionHeader/AMBITIONHEADER_FAILED', () => ({ }));