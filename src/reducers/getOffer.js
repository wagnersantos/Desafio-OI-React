import { OFFER_FETCHING, OFFER_ERROR, OFFER_SUCCESS } from '../actions/actions-types';

const initialState = {
  fetching : false,
  arr     : [],
  error: false
}

export const getOffer = (state = initialState, action) => {
  switch(action.type) {
    case OFFER_FETCHING:
      return {
        ...state,
        fetching: true,
        error: false
      }

    case OFFER_SUCCESS:
      return {
        ...state,
        fetching: false,
        arr: action.payload.offer
      }

    case OFFER_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
        arr: ''
      }

    default:
      return state;
  }
}