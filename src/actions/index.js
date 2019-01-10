import { CHANGE_SELECT } from '../actions/actionTypes';

export function addToDo(text){
	return { type: 'ADD_TODO', text }
}