import { CHANGE_SELECT } from '../actions/actions-types';

const initialState = {
    arr:['a','b']
}

export const changeSelect = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECT:
    	return {
    		arr: state.arr.push([action.newItem])
    	}
    default:
      return state;
  }
}