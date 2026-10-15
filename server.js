const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sum/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = parseInt(num1) + parseInt(num2);
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
