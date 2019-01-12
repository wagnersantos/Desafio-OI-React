import React, { Component } from 'react';
import Title from '../../components/title/Title';
import Cards from '../../components/cards/Cards';

class Main extends Component {
  render() {
    return (
      <div className='row'> 
      	<div className="container-main"> 
      		<Title />
      		<Cards /> 
        </div>
      </div>
    );
  }
}

export default Main;