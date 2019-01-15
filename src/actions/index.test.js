import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './actions-types';
import * as action from './index';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions creator', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('fetchOfferBegin should dispatch a OFFER_FETCHING action', () => {
    expect(actions.fetchOfferBegin())
      .toEqual({
        type: 'OFFER_FETCHING'
      })
  })

  it('fetchOfferFailure should dispatch a OFFER_ERROR action', () => {
    expect(actions.fetchOfferFailure())
      .toEqual({
        payload: {'error': undefined},
        type: 'OFFER_ERROR'
      })
  })

  it('fetchOfferSuccess should dispath an OFFER_SUCCESS action', () => {
    expect(actions.fetchOfferSuccess({
      
    }))
      .toEqual({
        type: 'OFFER_SUCCESS',
        payload: {'offer': {}}
      })
  })

  it('successful getOffer dispatches OFFER_FETCHING and OFFER_SUCCESS actions', () => {
    const store = mockStore({
      feching: false,
      error: false,
      payload: [],
    });

    const expectedActions = [
      { type: 'OFFER_FETCHING' },
      { type: 'OFFER_SUCCESS', 
        payload:  {
          'offer': [{"plano":"Plano 28","velocidade":"28 GB","isencao":["netflix","youtube","facebook","mensseger","instagram","whatsapp"],"conteudoDigital":["fox","hbogo","watch-espn","discovery-kids","noggin","colecao-oi"],"dependente-preco":"28,00","preco":"280,00"},{"plano":"Plano 27","velocidade":"27 GB","isencao":["youtube","facebook","mensseger","instagram","whatsapp"],"conteudoDigital":["watch-espn","discovery-kids","noggin","colecao-oi"],"dependente-preco":"27,00","preco":"270,00"},{"plano":"Plano 26","velocidade":"26 GB","isencao":["facebook","mensseger","instagram","whatsapp"],"conteudoDigital":["watch-espn","discovery-kids","noggin","colecao-oi"],"dependente-preco":"26,00","preco":"260,00"},{"plano":"Plano 25","velocidade":"25 GB","isencao":["facebook","mensseger","whatsapp"],"conteudoDigital":["discovery-kids","noggin","colecao-oi"],"dependente-preco":"25,00","preco":"250,00"},{"plano":"Plano 24","velocidade":"24 GB","isencao":["whatsapp"],"conteudoDigital":["colecao-oi"],"dependente-preco":"24,00","preco":"240,00"},{"plano":"Plano 23","velocidade":"23 GB","isencao":[],"conteudoDigital":["colecao-oi"],"dependente-preco":"23,00","preco":"230,00"},{"plano":"Plano 22","velocidade":"22 GB","isencao":[],"conteudoDigital":[],"dependente-preco":"22,00","preco":"220,00"},{"plano":"Plano 21","velocidade":"21 GB","isencao":[],"conteudoDigital":[],"dependente-preco":"21,00","preco":"210,00"},{"plano":"Plano 16","velocidade":"16 GB","isencao":["netflix","youtube","facebook","mensseger","instagram","whatsapp"],"conteudoDigital":["fox","hbogo","watch-espn","discovery-kids","noggin","colecao-oi"],"dependente-preco":"16,00","preco":"160,00"},{"plano":"Plano 14","velocidade":"14 GB","isencao":["youtube","facebook","mensseger","instagram","whatsapp"],"conteudoDigital":["watch-espn","discovery-kids","noggin","colecao-oi"],"dependente-preco":"14,00","preco":"140,00"},{"plano":"Plano 12","velocidade":"12 GB","isencao":["facebook","mensseger","instagram","whatsapp"],"conteudoDigital":["watch-espn","discovery-kids","noggin","colecao-oi"],"dependente-preco":"12,00","preco":"120,00"},{"plano":"Plano 10","velocidade":"10 GB","isencao":["facebook","mensseger","whatsapp"],"conteudoDigital":["discovery-kids","noggin","colecao-oi"],"dependente-preco":"10,00","preco":"100,00"},{"plano":"Plano 8","velocidade":"8 GB","isencao":["whatsapp"],"conteudoDigital":["colecao-oi"],"dependente-preco":"8,00","preco":"80,00"},{"plano":"Plano 6","velocidade":"6 GB","isencao":[],"conteudoDigital":["colecao-oi"],"dependente-preco":"6,00","preco":"60,00"},{"plano":"Plano 4","velocidade":"4 GB","isencao":[],"conteudoDigital":[],"dependente-preco":"4,00","preco":"40,00"},{"plano":"Plano 2","velocidade":"2 GB","isencao":[],"conteudoDigital":[],"dependente-preco":"","preco":"20,00"},{"plano":"Plano 1","velocidade":"1 GB","isencao":[],"conteudoDigital":[],"dependente-preco":"","preco":"10,00"}]}

      }
    ];

    return store.dispatch(action.getOffer())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  });

  it('failed getOffer dispatches OFFER_FETCHING and OFFER_ERROR actions', () => {
    const store = mockStore({
      feching: false,
      error: false,
      payload: []
    });

    const expectedActions = [
      { type: 'OFFER_FETCHING' },
      { type: 'OFFER_ERROR',
        payload: {'error': 'Error: Ocorreu um erro' }
      }
    ];

    fetchMock.get('*', () => {
      throw new Error('Ocorreu um erro').toString()
    });

    return store.dispatch(action.getOffer(''))
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  });
});