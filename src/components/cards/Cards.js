import React, { Component } from 'react';
import Slider from 'react-slick';

class Cards extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      variableWidth: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="cards">
        <h2 className='cards__offer-title'>Todas as nossas ofertas:</h2>
        <Slider {...settings}>

          <div className='cards__item'>
            <div className='cards__wrapper'>
              <div className='cards__block'>
                <div className='cards__header'>
                  <p className='cards__title'>Plano 8</p>
                  <p className='cards__internet'>
                    <span>8GB</span>
                  </p>
                </div>
                <div className='cards__apps-list'>
                  <p className=''>Apps com internet ilimitada:</p>
                  <div className='cards__apps-list__container'>
                  </div>
                </div>
                <div className='cards__video-list'>
                  <p className=''>Conteúdo digital em video:</p>
                  <div className='cards__video-list__container'>
                  </div>
                </div>
                <div className='cards__dependents'>
                  <p className='cards__dependents-title'>Adicione depentendes:</p>
                  <p className='cards__dependents-price'>Por mais R$ 8,00 cada</p>
                </div>              
              </div> 
              <div className='cards__block-price'>
                <div className='cards__block-price__value'>
                  <span className='cards__block-price__prefix'>R$</span>
                  <span className='cards__block-price__integer'>80</span>
                  <span className='cards__block-price__sufix'>
                    <span className='cards__block-price__cents'>,90</span>
                    <span className='cards__block-price__periodicity'>/mês</span>
                  </span>
                </div>
              </div> 
              <span className='cards__button'>Eu quero</span>
            </div> 
          </div>

          <div className='cards__item'>
            <div className='cards__wrapper'>
              <div className='cards__block'>
                <div className='cards__header'>
                  <p className='cards__title'>Plano 8</p>
                  <p className='cards__internet'>
                    <span>8GB</span>
                  </p>
                </div>
                <div className='cards__apps-list'>
                  <p className=''>Apps com internet ilimitada:</p>
                  <div className='cards__apps-list__container'>
                  </div>
                </div>
                <div className='cards__video-list'>
                  <p className=''>Conteúdo digital em video:</p>
                  <div className='cards__video-list__container'>
                  </div>
                </div>
                <div className='cards__dependents'>
                  <p className='cards__dependents-title'>Adicione depentendes:</p>
                  <p className='cards__dependents-price'>Por mais R$ 8,00 cada</p>
                </div>              
              </div> 
              <div className='cards__block-price'>
                <div className='cards__block-price__value'>
                  <span className='cards__block-price__prefix'>R$</span>
                  <span className='cards__block-price__integer'>80</span>
                  <span className='cards__block-price__sufix'>
                    <span className='cards__block-price__cents'>,90</span>
                    <span className='cards__block-price__periodicity'>/mês</span>
                  </span>
                </div>
              </div> 
              <span href='#' className='cards__button'>Eu quero</span>
            </div> 
          </div>

         </Slider>  
	    </div>
    );
  }
}

export default Cards;
