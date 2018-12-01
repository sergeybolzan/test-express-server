const express = require('express');
const router = express.Router();
let data = require('./data.json');

router.get('/', function(req, res) {
  res.send(data);
});

router.post('/', (req, res) => {
  data.push(req.body);
  res.sendStatus(201);
});

router.put('/', (req, res) => {
  const index = data.findIndex(value => value.endPoindID === req.body.endPoindID);
  if (index !== -1) {
    data[index] = req.body;
    res.sendStatus(200);
  } else {
    res.sendStatus(204);
  }
});

router.delete('/', (req, res) => {
  const index = data.findIndex(value => value.endPoindID === req.body.endPoindID);
  if (index !== -1) {
    data.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(204);
  }
});

module.exports = router;
