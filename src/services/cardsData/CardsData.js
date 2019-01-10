const CardsData = {
	getOfferFromRJ(){
		return fetch(`https://desafio-oi.herokuapp.com/sp`)
	},
	getOfferFromSP(){
		return fetch(`https://desafio-oi.herokuapp.com/rj`)
	},
	getOfferFromAll(){
		return fetch(`https://desafio-oi.herokuapp.com`)
	}
}

export default CardsData;