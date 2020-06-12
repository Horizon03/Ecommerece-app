const express = require('express');
const { default: data } = require('./data');
const app = express();
const port = 8000;

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(port, () => console.log(`Listening on port ${port}`));