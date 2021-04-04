import { SET_OLD_CREDIT_CARD } from "../actions";

let oldcreditcardReducer = (state = "", action) => {
  switch (action.type) {
    case SET_OLD_CREDIT_CARD:
      return action.payload;
    default:
      return state;
  }
};

export default oldcreditcardReducer;
