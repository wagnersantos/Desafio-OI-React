import React, { Component } from 'react';
import { getOffer } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardsItem from '../../components/cardsItem/CardsItem';

class Cards extends Component {
  componentDidMount() {
     this.props.dispatch(getOffer());
  }
  render() {
    const {arr, fetching, error, selected,dispatch} = this.props;
    console.log(arr);

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (fetching) {
      return <div>Loading...</div>;
    }
    return (
      <div className="cards">
        <h2 className='cards__offer-title'>Todas as nossas ofertas:</h2>
        <CardsItem arr={arr} />  
	    </div>
    )
  }
}

const mapStateToProps = store => ({
  arr: store.getOffer.arr,
  fetching: store.getOffer.fetching,
  error: store.getOffer.error
});


//const mapDispatchToProps = dispatch => bindActionCreators( getOffer , dispatch);

export default connect (mapStateToProps)(Cards);
