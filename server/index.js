const express = require('express');
const bodyParser= require('body-parser');
const calcBlocks = require('../helpers/calcBlocks.js').calcBlocks;
const PORT = 3000;
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/')));

app.post('/makeBlocks', (req, res) => {
  let inputBlocks = req.body.inputBlocks
  .split(',')
  .map((number) => {
    return parseInt(number);
  });
  
  let wells = calcBlocks(inputBlocks);

  res.send(wells);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
