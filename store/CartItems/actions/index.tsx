/*
 * test Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

 type cartItem = {
   item:{ id: number;
    name: string;
    abv: number;
    image_url: string;
    tagline: string;
    description: string;
    food_pairing: string[];
   },
   count:number;
}[]
 

import { 
  GET_MODIFY_CART_ITEMS_ACTION
 } from '../Constants';

export function modifyCartItemsAction(cartItem:cartItem): { type: string , cartItem :cartItem} {
  return {
    type: GET_MODIFY_CART_ITEMS_ACTION,
    cartItem
  };
}


