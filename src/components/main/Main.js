import React, { Component } from 'react';
import Title from '../../components/title/Title';
import Cards from '../../components/cards/Cards';

class Main extends Component {
  render() {
    return (
    	<div className="container-main"> 
    		<div>
    			<Title />
    		</div>
    		<div className='offer'> 
    			<Cards /> 
    		</div>
      	</div>
    );
  }
}

export default Main;