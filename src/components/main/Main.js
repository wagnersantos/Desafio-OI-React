import React, { Component } from 'react';
import Title from '../../components/title/Title';
import Subtitle from '../../components/subtitle/Subtitle';

class Main extends Component {
  render() {
    return (
    	<div className="container-main"> 
    		<Title /> 
    		<Subtitle /> 
      	</div>
    );
  }
}

export default Main;