const express = require("express");
const app = express();
const post = require("../controller/prueba");
const route = "/prueba";

app.post(`${route}`, (req, res) => {
  return post()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ err: err.message });
    });
});

module.exports = app;
