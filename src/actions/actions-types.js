export const OFFER_FETCHING = 'OFFER_FETCHING';
export const OFFER_ERROR    = 'OFFER_ERROR';
export const OFFER_SUCCESS  = 'OFFER_SUCCESS';


export const fetchOfferBegin = () => ({
  type: OFFER_FETCHING
});

export const fetchOfferSuccess = offer => ({
  type: OFFER_SUCCESS,
  payload: { offer }
});

export const fetchOfferFailure = error => ({
  type: OFFER_ERROR,
  payload: { error }
});