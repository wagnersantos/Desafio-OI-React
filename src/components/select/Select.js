import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOffer } from '../../actions';

class Select extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(value){
		if(value === 'Rio de Janeiro'){
			this.props.dispatch(getOffer('rj'));
		}else if(value === 'São Paulo'){
			this.props.dispatch(getOffer('sp'));
		}else if(value === 'Todos'){
			this.props.dispatch(getOffer());
		}
	}
	render(){
		return (
			<div className="container-menu--select" 
				onChange={(e) => this.handleChange(e.target.value)}>
				<select>
				  	<option value="Todos">Todos</option>
				  	<option value="Rio de Janeiro">Rio de Janeiro</option>
				  	<option value="São Paulo">São Paulo</option>
				</select>
			</div>
		)
	}
}

const mapStateToProps = store => ({
  arr: store.getOffer.arr,
  fetching: store.getOffer.fetching,
  error: store.getOffer.error
});

export default connect(mapStateToProps)(Select);