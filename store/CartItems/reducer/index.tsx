/*
 * Activity Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { 
  GET_MODIFY_CART_ITEMS_ACTION
 } from '../Constants';

// The initial state of the App
export const initialState = {
  cartItems:[]
};

const cartReducer = (state = initialState, action) =>{
  
  return produce(state, draft => {
   
    switch (action.type) {

      case  GET_MODIFY_CART_ITEMS_ACTION:
        draft.cartItems =action.cartItem;
        break;
    }
  });
}
export default cartReducer;
