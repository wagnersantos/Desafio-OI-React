import React, { Component } from 'react';
import Slider from 'react-slick';
import { getOffer } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardsItem from '../../components/cardsItem/CardsItem';

class Cards extends Component {
  componentDidMount() {
     this.props.dispatch(getOffer());
  }
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      variableWidth: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }  
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
        <Slider {...settings}>
          <CardsItem arr={arr} />
        </Slider>  
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
