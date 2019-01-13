import React from 'react';
import Title from '../../components/title/Title';
import Cards from '../../components/cards/Cards';

const Main = (props) => (
  <section className="container-main">
    <div className="conatiner-main__title">
      <Title />
    </div>
    <div className='conatiner-main__offer'> 
      <Cards /> 
    </div>
  </section>
)

export default Main;