import React from 'react';
import { Fox, Hbogo, Espn, Discovery, Noggin, Colecao } from '../../components/images';

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
        </div>)
    ) 
    ||
    ((arr.conteudoDigital.length === 0) &&
	    (<div className='cards__video-list'>
	        <p className='cards__video-list__title'>&nbsp;</p>
	        <div className='cards__video-list__container'>
	            <div className='cards__video-list__logos'>
	                <span>____</span>
	            </div>
	        </div>
	     </div>)
	)
)

export default CardsVideo;