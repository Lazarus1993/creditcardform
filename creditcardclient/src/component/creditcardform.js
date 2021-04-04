import React from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import axios from "axios";

let CreditCardForm = () => {
  // // let data = useSelector((state) => state.oldcc);
  let allState = useSelector((state) => state);

  let handleSubmit = async (e) => {
    e.preventDefault();
    let creditcardinfo = getFormValues("CreditCardForm")(allState);
    try {
      let response = await axios.post("/api/card/submit", creditcardinfo);
      console.log("api CALL SUCCEDDED");
    } catch (err) {
      console.log("API call failed");
    }
  };

  return (
    <form>
      <Field name="name" component="input" type="text" />
      <Field name="ccnumber" component="input" type="text" />
      <Field name="expdate" component="input" type="text" />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

CreditCardForm = reduxForm({
  form: "CreditCardForm",
})(CreditCardForm);

export default CreditCardForm;
