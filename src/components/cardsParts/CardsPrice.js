import React from 'react';

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

export default CardsPrice;