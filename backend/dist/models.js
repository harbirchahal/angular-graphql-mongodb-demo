'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var personSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String
});

// Person.index({'$**': 'text'});

var personModel = _mongoose2.default.model('people', personSchema);

exports.default = personModel;