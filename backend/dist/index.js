'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = 'http://localhost';
var PORT = 3001;
var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log('Visit ' + URL + ':' + PORT);
});