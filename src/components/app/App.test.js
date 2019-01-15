import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { wrap } from 'module';

describe('<App />', () => {
  const getOffer = jest.fn();

  const props = {
    fetching: false,
    error: false,
    arr: {},
    getOffer: getOffer,
  };

  it('shallow renders correctly', () => {
    expect(shallow(<App {...props} />));
  });

  
  it('renders a div tag if error', () => {
    const wrapper = mount(
      <App
        fetching={false}
        error={true}
        arr={{}}
        getOffer={getOffer}
      />);

    expect(wrapper.find('div').length).toBe(12);
  });

  it('does not render a div tag if error', () => {
    const wrapper = mount(<App {...props} />);

    expect(wrapper.find('div').length).toBe(12);
  });

  it('renders an img if fetching equals true', () => {
    const wrapper = mount(
      <App
        fetching={true}
        error={false}
        arr={{}}
        getOffer={getOffer}
      />
    );

    expect(wrapper.find('img').length).toBe(2);
  })

  it('renders a div with one div tags on successful fetch', () => {
    const wrapper = mount(
      <App
        fetching={false}
        error={false}
        arr={{
        	"plano":"Plano 28","velocidade":"28 GB","isencao":["netflix","youtube","facebook","mensseger","instagram","whatsapp"],"conteudoDigital":["fox","hbogo","watch-espn","discovery-kids","noggin","colecao-oi"],"dependente-preco":"28,00","preco":"280,00"
        }}
        getOffer={getOffer} />
    );

    expect(wrapper.find('div').length).toBe(12)
  });
});