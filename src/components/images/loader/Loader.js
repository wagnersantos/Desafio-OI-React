import React from 'react';
import loaderSrc from '../../../assets/images/img/loader.gif';

const Loader = (props) => (
	<div className='cards__loader'>
		<img alt='loader icon' src={loaderSrc}/>
	</div>
)

export default Loader;