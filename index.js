const express = require("express");
const app = express();
const validateCreditCardInfo = require("./validations/creditcard");
const isEmpty = require("./validations/isEmpty");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ msg: "Hello this is node" });
});

app.post("/api/card/submit", (req, res) => {
  let errors = validateCreditCardInfo(req.body);
  if (!isEmpty(errors)) {
    res.status(400).json(errors);
  } else {
    res.status(200).json(req.body);
  }
});

app.listen(5000, () => console.log("Listening on port 5000"));
