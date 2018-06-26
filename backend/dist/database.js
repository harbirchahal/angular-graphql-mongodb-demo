'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = 'mongodb://localhost';
var DB = 'community';

_mongoose2.default.connect(URL + '/' + DB);

var connection = _mongoose2.default.connection;

connection.once('open', function () {
  console.log('Connected to ' + URL);
});

exports.default = connection;