import React from 'react';
import Slider from 'react-slick';
import { CardsHeader, CardsApps, CardsVideo, CardsDependents, CardsPrice } from '../cardsParts';
import Settings from '../settings/Settings';

const CardsItem = ({arr}) => (
    <div className='cards__items'>
        <Slider {...Settings}>
            {arr.map((arr, index) => (
                <div className='cards__item' key={index}>
                    <div className='cards__wrapper'>
                        <div className='cards__block'>
                            <CardsHeader arr={arr}/>
                            <CardsApps arr={arr}/>
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
