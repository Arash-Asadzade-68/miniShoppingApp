import {takeLatest, all} from 'redux-saga/effects'
//functions in saga 
import {getAllBeers} from './Beers/saga'
import {getPizzaBeers} from './PizzaBeers/saga'
import {getSteakBeers} from './SteakBeers/saga'
//actions for get request

import {GET_ALL_BEERS_ACTION  } from './Beers/Constants'
import {GET_PIZZA_BEERS_ACTION } from './PizzaBeers/Constants'
import { GET_STEAK_BEERS_ACTION } from './SteakBeers/Constants'
export default function* sagaIndex() {

  yield all([
    takeLatest(GET_ALL_BEERS_ACTION, getAllBeers),
    takeLatest(GET_PIZZA_BEERS_ACTION, getPizzaBeers),
    takeLatest(GET_STEAK_BEERS_ACTION, getSteakBeers),
  ])
}