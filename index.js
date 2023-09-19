const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const date = new Date().toLocaleTimeString();
  res.send(`Hello World!, ${date.toString()}`);
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
