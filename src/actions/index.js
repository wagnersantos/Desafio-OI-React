import { CHANGE_SELECT,fetchOfferBegin, fetchOfferFailure, fetchOfferSuccess } from './actions-types'

export const changeSelect = (selected) => ({
	 type: CHANGE_SELECT, selected 
})


export function getOffer(param = "") {
  return dispatch => {
    dispatch(fetchOfferBegin());
    return fetch(`https://cors-anywhere.herokuapp.com/https://desafio-oi.herokuapp.com/${param}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchOfferSuccess(json));
        return json[0];
      })
      .catch(error => dispatch(fetchOfferFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(response.statusText);
  }
  return response;
}