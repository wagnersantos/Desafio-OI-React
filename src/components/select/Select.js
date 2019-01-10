import React, { Component } from 'react';
import CardsData from '../../services/cardsData/CardsData';

class Select extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			offer: [] 
		}
	}
	handleChange(value){
		if(value === 'Rio de Janeiro'){
			CardsData.getOfferFromRJ()
			.then(response => response.json())
			.then(json => this.setState({offer: json}));
		}else if (value === 'São Paulo') {
			CardsData.getOfferFromSP()
			.then(response => response.json())
			.then(json => this.setState({offer: json}));
		}else if (value === 'Todos') {
			CardsData.getOfferFromAll()
			.then(response => response.json())
			.then(json => this.setState({offer: json}));
		}
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