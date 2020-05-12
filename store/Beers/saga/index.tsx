/**
 * Gets the information of the city from server
 */

import { put, call } from 'redux-saga/effects';
import { getAllBeersSuccessAction ,getAllBeersErrorAction } from '../actions';
import {getAllBeersApi} from '../../../services/http/common'
import _handleErrors from '../../handleErrors';

export function* getAllBeers(action){  
 
  try {
    const beers = yield call(getAllBeersApi,action.getRequestParams)
     yield put(getAllBeersSuccessAction(beers));
  } catch (err) {
    yield call(_handleErrors, err,getAllBeersErrorAction);
  }
};

