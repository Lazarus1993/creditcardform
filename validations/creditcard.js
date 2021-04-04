const validator = require("validator");
const isEmpty = require("./isEmpty");

let validateCreditCardInfo = (data) => {
  let errors = {};

  data.name = isEmpty(data.name) ? "" : data.name;
  data.ccnumber = isEmpty(data.ccnumber) ? "" : data.ccnumber;
  data.expdate = isEmpty(data.expdate) ? "" : data.expdate;

  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (validator.isEmpty(data.ccnumber)) {
    errors.ccnumber = "Credit Card Number is required";
  }
  if (validator.isEmpty(data.expdate)) {
    errors.expdate = "Expiry date is required";
  }
  return errors;
};

module.exports = validateCreditCardInfo;
