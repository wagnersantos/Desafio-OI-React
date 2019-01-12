import React, { Component } from 'react';
import Title from '../../components/title/Title';
import Cards from '../../components/cards/Cards';

class Main extends Component {
  render() {
    return (
      <section className="container-main">
        <div className="conatiner-main__title">
          <Title />
        </div>
        <div className='conatiner-main__offer'> 
          <Cards /> 
        </div>
      </section>
    );
  }
}

export default Main;