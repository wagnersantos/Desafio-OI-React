import React from 'react';
import Slider from 'react-slick';
import { Fox, Hbogo, Espn, Discovery, Noggin, Colecao } from '../../components/images';

const CardsHeader =  ({arr}) => (
    <div className='cards__header'>
        <p className='cards__title'>{arr.plano}</p>
        <p className='cards__internet'>
            <span>{arr.velocidade}</span>
        </p>
    </div>
)
const CardsApss = ({arr}) => (
    ((arr.isencao.length !== 0) &&
    (<div className='cards__apps-list'>
        <p className='cards__apps-list__title'>
            Apps com <span className='underline'>internet ilimitada:</span>
        </p>
        <div className='cards__apps-list__container'>
            <ul className='cards__apps-list__social-icons'>
                {
                    arr.isencao.map((icon,index) => 
                        <li className={`icon-${icon}`} key={index}>
                            <span title={`ícone ${icon}`}></span>
                        </li>
                    )
                    
                }
            </ul>
        </div>
    </div>))
    ||
    ((arr.isencao.length === 0) &&
    (<div className='cards__apps-list'>
        <p className='cards__apps-list__title'>&nbsp;</p>
        <div className='cards__apps-list__container'>
            <ul className='cards__apps-list__social-icons'>
                <span>____</span>
            </ul>
        </div>
    </div>))
)

const CardsVideo = ({arr}) => (
    
        ((arr.conteudoDigital.length !== 0) &&
        (<div className='cards__video-list'>
            <p className='cards__video-list__title'>
                <span className='underline'>Conteúdo digital</span> em video:
            </p>
            <div className='cards__video-list__container'>
                <div className='cards__video-list__logos'>
                    {
                        arr.conteudoDigital.map((logo,index) => {
                            return(
                               (logo === 'fox' && <Fox key={index} />) ||
                               (logo === 'hbogo' && <Hbogo key={index} />) ||
                               (logo === 'watch-espn' && <Espn key={index} />) ||
                               (logo === 'discovery-kids' && <Discovery key={index} />) ||
                               (logo === 'noggin' && <Noggin key={index} />) ||
                               (logo === 'colecao-oi' && <Colecao key={index} />)
                            )
                        })
                    }
                </div>
            </div>
        </div>)) 
        ||
        ((arr.conteudoDigital.length === 0) &&
        (<div className='cards__video-list'>
            <p className='cards__video-list__title'>&nbsp;</p>
            <div className='cards__video-list__container'>
                <div className='cards__video-list__logos'>
                    <span>____</span>
                </div>
            </div>
         </div>))
)

const CardsDependents = ({arr}) => (
    ((arr['dependente-preco'].length !== 0) &&
    (<div className='cards__dependents'>
        <p className='cards__dependents-title'>Adicione depentendes:</p>
        <p className='cards__dependents-price'>{`Por mais R$ ${arr['dependente-preco']} cada`}</p>
    </div>))
    || 
    ((arr['dependente-preco'].length === 0) &&
    (<div className='cards__dependents'>
        <p className='cards__dependents-title'>&nbsp;</p>
        <span>____</span>
    </div>))
)

const CardsPrice = ({arr}) => (
    <div className='cards__block-price__value'>
        <span className='cards__block-price__prefix'>R$</span>
        <span className='cards__block-price__integer'>{arr.preco.split(',')[0]}</span>
        <span className='cards__block-price__sufix'>
            <span className='cards__block-price__cents'>{`,${arr.preco.split(',')[1]}`}</span>
            <span className='cards__block-price__periodicity'>/mês</span>
        </span>
    </div>
)

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
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
}  
const CardsItem = ({arr}) => (
    <div className='cards__items'>
        <Slider {...settings}>
            {arr.map((arr, index) => (
                <div className='cards__item' key={index}>
                    <div className='cards__wrapper'>
                        <div className='cards__block'>
                            <CardsHeader arr={arr}/>
                            <CardsApss arr={arr}/>
                            <CardsVideo arr={arr}/>
                            <CardsDependents arr={arr}/>             
                        </div> 
                        <div className='cards__block-price'>
                            <CardsPrice arr={arr}/>
                        </div> 
                        <span className='cards__button'>Eu quero</span>
                    </div>
                </div>
            ))} 
        </Slider>
    </div>
)

export default CardsItem;
