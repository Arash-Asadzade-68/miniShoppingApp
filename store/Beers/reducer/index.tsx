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
 GET_ALL_BEERS_ACTION,
 GET_ALL_BEERS_SUCCESS_ACTION,
 GET_ALL_BEERS_FAIL_ACTION
} from '../Constants';

// The initial state of the App
export const initialState = {
  getRequestParams: null,
  requestStatus:null,
  listDto: null,
  error: null,
  loading: false,
};

const getAllBeersReducer = (state = initialState, action) =>

  produce(state, draft => {
    switch (action.type) {

      case  GET_ALL_BEERS_ACTION:
        draft.getRequestParams = null;
        draft.requestStatus=action.requestStatus;
        draft.listDto = null;
        draft.error = null;
        draft.loading = true;
        break;
      case GET_ALL_BEERS_SUCCESS_ACTION:
        draft.getRequestParams = null;
        draft.requestStatus=null;
        draft.listDto = action.beersObject.data;
        draft.error = null;
        draft.loading = false;
        break;
      case  GET_ALL_BEERS_FAIL_ACTION:
        draft.getRequestParams = null;
        draft.requestStatus=null;
        draft.listDto = null;
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default getAllBeersReducer;
