import React, { Component } from 'react';
import CardsData from '../../services/cardsData/CardsData';

class Select extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);

		this.state= {
			offfer: [] 
		}
	}
	handleChange(value){
	}
	render(){
		return (
			<div className="container-menu--select" onChange={(e) => this.handleChange(e.target.value)}>
				<select>
				  	<option value="Todos">Todos</option>
				  	<option value="Rio de Janeiro">Rio de Janeiro</option>
				  	<option value="São Paulo">São Paulo</option>
				</select>
			</div>
		)
	}
}

export default Select;