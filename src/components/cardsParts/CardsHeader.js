import React from 'react';

const CardsHeader =  ({arr}) => (
    <div className='cards__header'>
        <p className='cards__title'>{arr.plano}</p>
        <p className='cards__internet'>
            <span>{arr.velocidade}</span>
        </p>
    </div>
)

export default CardsHeader;