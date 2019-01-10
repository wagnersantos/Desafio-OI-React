
const initialUserState = {
    arr:[]
}

export default function changeSelect(state = [], action){
  switch (action.type) {
    case 'CHANGE__SELECT':
      arr: state.arr.push([action.newItem])
    default:
      return state;
  }
}