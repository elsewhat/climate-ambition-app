import { combineReducers } from 'redux';
import { stateKeys } from '../../types';
import ambitionHeaderReducer from '../ambition-header/reducer';


export default combineReducers({
  [stateKeys.AMBITIONHEADER]: ambitionHeaderReducer,
});