const express = require('express');
const bodyParser = require('body-parser')
const app = express();
let buzz = require('./routes/buzzwords')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/buzzwords', buzz);

const server = app.listen(4500, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Buzzword app listening at http://${host}${port}`);
})