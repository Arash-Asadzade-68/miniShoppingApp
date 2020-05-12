/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

// import history from './utils/history';

import getAllBeersReducer  from './Beers/reducer';
import getPizzaBeersReducer  from './PizzaBeers/reducer';
import getSteakBeersReducer  from './SteakBeers/reducer';
import cartReducer  from './CartItems/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  
  const rootReducer = combineReducers({
    beers :getAllBeersReducer,
    pizzaBeers : getPizzaBeersReducer,
    steakBeers : getSteakBeersReducer,
    cartItems : cartReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
