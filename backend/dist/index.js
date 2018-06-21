'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apolloServerExpress = require('apollo-server-express');

var _schema = require('./schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import cors from 'cors';
var URL = 'http://localhost';
var PORT = 3001;
var app = (0, _express2.default)();

// app.use(cors());
app.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({
  schema: _schema.schema
}));

app.use('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({
  endpointURL: '/graphql'
}));

app.listen(PORT, function () {
  console.log('Visit ' + URL + ':' + PORT);
});