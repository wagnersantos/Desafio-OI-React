import React from 'react';
import { connect } from 'react-redux';
import { getOffer } from '../../actions';

const Select = (props) => (
	<div className='container-menu--select' 
		onChange={(e) => props.dispatch(getOffer(e.target.value))}>
		<select>
		  	<option value=''>Todos</option>
		  	<option value='rj'>Rio de Janeiro</option>
		  	<option value='sp'>São Paulo</option>
		</select>
	</div>
)

const mapStateToProps = store => ({
  arr: store.getOffer.arr,
  fetching: store.getOffer.fetching,
  error: store.getOffer.error
});

export default connect(mapStateToProps)(Select);