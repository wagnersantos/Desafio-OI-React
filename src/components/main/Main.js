import React, { Component } from 'react';
import Title from '../../components/title/Title';
import Subtitle from '../../components/subtitle/Subtitle';
import Cards from '../../components/cards/Cards';

class Main extends Component {
  render() {
    return (
    	<div className="container-main"> 
    		<Title /> 
    		<Subtitle />
    		<Cards /> 
      	</div>
    );
  }
}

export default Main;