import { CHANGE_SELECT } from '../actions/actionTypes';

const initialUserState = {
    arr:[]
}

export default function changeSelect(state = [], action){
  switch (action.type) {
    case 'CHANGE_SELECT':
      arr: state.arr.push([action.newItem])
    default:
      return state;
  }
}