'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DATA = [{ id: 1, firstname: 'Phil', lastname: 'Dyer', email: 'phil.dyer@gmail.com', isActive: true }, { id: 2, firstname: 'Victoria', lastname: 'Smith', email: 'victoria.smith@gmail.com', isActive: true }, { id: 3, firstname: 'Jacob', lastname: 'Brown', email: 'jacob.brown@gmail.com', isActive: true }, { id: 4, firstname: 'Stephanie', lastname: 'Cameron', email: 'stephanie.cameron@gmail.com', isActive: true }, { id: 5, firstname: 'Dominic', lastname: 'Lyman', email: 'dominic.lyman@gmail.com', isActive: true }, { id: 6, firstname: 'James', lastname: 'Fraser', email: 'james.fraser@gmail.com', isActive: true }, { id: 7, firstname: 'Pippa', lastname: 'Johnston', email: 'pippa.johnston@gmail.com', isActive: true }, { id: 8, firstname: 'Rachel', lastname: 'Carr', email: 'rachel.carr@gmail.com', isActive: true }, { id: 9, firstname: 'Claire', lastname: 'Anderson', email: 'claire.anderson@gmail.com', isActive: false }, { id: 10, firstname: 'Diane', lastname: 'Hughes', email: 'diane.hughes@gmail.com', isActive: false }, { id: 11, firstname: 'Natalie', lastname: 'Johnston', email: 'natalie.johnston@gmail.com', isActive: true }, { id: 12, firstname: 'Abigail', lastname: 'Manning', email: 'abigail.manning@gmail.com', isActive: false }, { id: 13, firstname: 'Angela', lastname: 'Coleman', email: 'angela.coleman@gmail.com', isActive: false }, { id: 14, firstname: 'Andrew', lastname: 'Baker', email: 'andrew.baker@gmail.com', isActive: false }, { id: 15, firstname: 'Tracey', lastname: 'Howard', email: 'tracey.howard@gmail.com', isActive: true }];

var resolvers = {
  Query: {
    persons: function persons(root) {
      return DATA;
    },
    person: function person(root, _ref) {
      var id = _ref.id;

      return DATA.find(function (p) {
        return p.id === id;
      });
    }
  },
  Mutation: {
    create: function create(root, _ref2) {
      var firstname = _ref2.firstname,
          lastname = _ref2.lastname,
          email = _ref2.email;

      return null;
    }
  }
};

exports.default = resolvers;