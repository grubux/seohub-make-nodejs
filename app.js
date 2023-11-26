"use strict";

const splitByCharLength = require("./src/splitByCharLength.js");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}.`));

app.use(express.json());

app.get("/", (req, res) => res.send("Hello world!"));

app.post("/splitByCharLength", (req, res) => {
  const input = req.body.string;
  const chunkSize = req.body.chunkSize;
  const result = splitByCharLength(input, chunkSize);
  res.send(result);
});

module.exports = app;
