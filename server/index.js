const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
