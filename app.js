const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const buzz = require('./routes/buzzwords');
const buzzwords = require('./buzzwordStorage');

const PORT = 4500;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/buzzwords', buzz);

app.post('/reset', function (req, res) {
  if (req.body.reset === true) {
    buzzwords.reset();
    res.json({ "success": true });
  } else {
    res.send(false);
  };
});

app.post('/heard', function (req, res) {
  if (req.body.buzzWord) {
    res.json(buzzwords.score(req.body));
  } else {
    res.send(false);
  };
});

const server = app.listen(PORT, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Buzzword app listening at http://${host}${port}`);
});