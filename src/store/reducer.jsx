import types from "../types";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT.type:
      return {
        ...state,
        counter: action.value
      };
    case types.DECREMENT.type:
      return {
        ...state,
        counter: action.value
      };
    case types.ADD5.type:
      return {
        ...state,
        counter: action.value
      };
    case types.SUBSTRACT5.type:
      return {
        ...state,
        counter: action.value
      };
    default:
        return state;  
  }
};

export default reducer;
