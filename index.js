const express = require("express");
const app = express();
const validateCreditCardInfo = require("./validations/creditcard");
const isEmpty = require("./validations/isEmpty");
const redis = require("redis");
const rclient = redis.createClient();

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
  let creditCardInfo = req.body;
  let ccnumber = creditCardInfo.ccnumber.toString();
  let errors = validateCreditCardInfo(creditCardInfo);
  if (!isEmpty(errors)) {
    res.status(400).json(errors);
  } else {
    rclient.set(ccnumber, JSON.stringify(creditCardInfo));
    rclient.get(ccnumber, (err, ccinfo) => {
      console.log(ccinfo);
    });
    res.status(200).json(req.body);
  }
});

app.listen(5000, () => console.log("Listening on port 5000"));
