import React from "react";
import { useSelector } from "react-redux";
import { reduxForm } from "redux-form";

let CreditCardForm = () => {
  let data = useSelector((state) => state.oldcc);
  return <div>{data}"Credit Card Form"</div>;
};

CreditCardForm = reduxForm({
  form: "CreditCardForm",
})(CreditCardForm);

export default CreditCardForm;
