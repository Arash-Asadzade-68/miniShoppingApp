/**
 * Gets the information of the city from server
 */

import { put, call } from 'redux-saga/effects';
import { getSteakBeersSuccessAction,getSteakBeersErrorAction } from '../actions';
import {getSteakMachedBeersApi} from '../../../services/http/common'
import _handleErrors from '../../handleErrors';

export function* getSteakBeers(action){  
 
  try {
    const beers = yield call(getSteakMachedBeersApi,action.getRequestParams)
     yield put(getSteakBeersSuccessAction(beers));
  } catch (err) {
    yield call(_handleErrors, err,getSteakBeersErrorAction);
  }
};

