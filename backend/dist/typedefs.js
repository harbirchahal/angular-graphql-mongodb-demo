"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefs = ["\n  type Person {\n    id: String\n    firstname: String\n    lastname: String\n    email: String\n    isActive: Boolean\n  }\n\n  type Query {\n    persons: [Person]\n    person(id: String!): Person\n  }\n\n  type Mutation {\n    create(firstname: String!, lastname: String!, email: String!): Person\n  }\n"];

exports.default = typeDefs;