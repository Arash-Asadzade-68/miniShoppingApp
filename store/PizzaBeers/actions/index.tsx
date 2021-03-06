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

 type requestParams ={
   page:number,
   per_page:number,
   food:string
 }

import { 
  GET_PIZZA_BEERS_ACTION,
  GET_PIZZA_BEERS_SUCCESS_ACTION,
  GET_PIZZA_BEERS_FAIL_ACTION } from '../Constants';

export function getPizzaBeersAction(getRequestParams:requestParams): { type: string , getRequestParams :requestParams} {
  return {
    type: GET_PIZZA_BEERS_ACTION,
    getRequestParams
  };
}
export function getPizzaBeersSuccessAction(pizzaBeersObject: any): { type: string, pizzaBeersObject: any } {
  return {
    type: GET_PIZZA_BEERS_SUCCESS_ACTION,
    pizzaBeersObject,
  };
}
export function getPizzaBeersErrorAction(error: string): { type: string, error: string } {
  return {
    type: GET_PIZZA_BEERS_FAIL_ACTION,
    error,
  };
}


