import React from 'react';

const CardsApps = ({arr}) => (
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

export default CardsApps;