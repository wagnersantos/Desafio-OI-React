import { fetchOfferBegin, fetchOfferFailure, fetchOfferSuccess } from './actions-types'

export const getOffer = (param = '') => (
  dispatch => {
    dispatch(fetchOfferBegin())
    return ( 
      fetch(`https://cors-anywhere.herokuapp.com/https://desafio-oi.herokuapp.com/${param}`)
        .then(response =>
          (!response.ok) ? console.log(response.statusText) : response
        )
        .then(response => response.json())
        .then(json => {
          dispatch(fetchOfferSuccess(json))
          return json[0];
        })
        .catch(error => dispatch(fetchOfferFailure(error)))
    )
  }
)