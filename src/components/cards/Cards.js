import React, { Component } from 'react';
import { getOffer } from '../../actions';
import { connect } from 'react-redux';
import CardsItem from '../../components/cardsItem/CardsItem';
import Loader from '../../components/images/loader/Loader';

class Cards extends Component {
  componentDidMount() {
     this.props.dispatch(getOffer());
  }
  render() {
    const { arr, fetching, error } = this.props;
   
    return (
      <div className='cards'>
        <h2 className='cards__offer-title'>Todas as nossas ofertas:</h2>
          {
             error && 
               <p className='cards__error'>
                  Ocorreu um erro ao carregar a página. Por favor tente novamente.
               </p>
          }
          {
            fetching && <Loader />
          }
          {
            arr.length !== 0 && !fetching && <CardsItem arr={arr.slice(0,8)} />  
          }
	    </div>
    )
  }
}

const mapStateToProps = store => ({
  arr: store.getOffer.arr,
  fetching: store.getOffer.fetching,
  error: store.getOffer.error
});

export default connect (mapStateToProps)(Cards);
