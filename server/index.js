var express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
var app = express();

app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Preuba insaite'))

app.use(require('./routes/index'))

app.listen(5000, () => {
    console.log('Express app listening on port 5000')
});