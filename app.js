const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const appConfig = require('./config/appConfig');

const port = process.env.PORT || 5000
const url = process.env.DATABASE_URI || appConfig.development.url

console.log(url);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(cors());

app.listen(port);
mongoose.connect(url, { useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true })
console.log('🚀 The magic happens on port ' + port);

require('./app/routes/currency.js')(app);

app.use(express.static(path.join(__dirname, 'app/views/frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/frontend/build/index.html'));
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
exports = module.exports = app;