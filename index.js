const express = require("express");
const app = express();
const services = require("./services");

app.get("/", (req, res) => {
  res.send(services.genRndVisaCards(10000));
});

app.listen(3000, () => {
  console.log("App is running on port 3000...");
});
