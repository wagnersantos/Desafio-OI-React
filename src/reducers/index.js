import { combineReducers } from 'redux';
import { changeSelect } from './changeSelect'; 
import { getOffer } from './getOffer'; 

export default combineReducers({
	changeSelect,
	getOffer
});