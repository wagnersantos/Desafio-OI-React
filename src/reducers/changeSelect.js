import { CHANGE_SELECT } from '../actions/actions-types';

const initialState = {
    selected:''
}

export const changeSelect = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECT:
    	return {
    		selected: action.selected
    	}
    default:
      return state;
  }
}