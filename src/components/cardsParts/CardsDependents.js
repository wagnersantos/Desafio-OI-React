import React from 'react';

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

export default CardsDependents;