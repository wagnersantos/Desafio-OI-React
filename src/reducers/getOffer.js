import { handleActions } from 'redux-actions'
import { OFFER_FETCHING, OFFER_ERROR, OFFER_SUCCESS } from '../actions/actions-types';

const initialState = {
  fetching : false,
  arr     : [],
  error: null
}


export function getOffer (state = initialState, action) {
  //console.log(action)
  switch(action.type) {
    case OFFER_FETCHING:
      return {
        ...state,
        fetching: true,
        error: null
      };

    case OFFER_SUCCESS:
      return {
        ...state,
        fetching: false,
        arr: action.payload.offer
      };

    case OFFER_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
        arr: ''
      };

    default:
      return state;
  }
}