import { POST_CREDIT_CARD_INFO } from "../actions";

let creditcardReducer = (state = "", action) => {
  switch (action.type) {
    case POST_CREDIT_CARD_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default creditcardReducer;
