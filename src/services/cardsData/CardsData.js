const proxy = "https://cors-anywhere.herokuapp.com/";

const CardsData = {
	getOfferFromRJ(){
		return fetch(`${proxy}https://desafio-oi.herokuapp.com/rj`)
	},
	getOfferFromSP(){
		return fetch(`${proxy}https://desafio-oi.herokuapp.com/sp`)
	},
	getOfferFromAll(){
		return fetch(`${proxy}https://desafio-oi.herokuapp.com`)
	}
}

export default CardsData;