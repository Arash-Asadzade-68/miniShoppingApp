/**
 * Gets the information of the city from server
 */

import { put, call } from 'redux-saga/effects';
import { getPizzaBeersSuccessAction ,getPizzaBeersErrorAction } from '../actions';
import {getPizzaMachedBeersApi} from '../../../services/http/common'
import _handleErrors from '../../handleErrors';

export function* getPizzaBeers(action){  
 
  try {
    const pizzaBeers = yield call(getPizzaMachedBeersApi,action.getRequestParams)
     yield put(getPizzaBeersSuccessAction(pizzaBeers));
  } catch (err) {
    yield call(_handleErrors, err,getPizzaBeersErrorAction);
  }
};

