const DATA = [
  { id: 1, firstname: 'Phil', lastname: 'Dyer', email: 'phil.dyer@gmail.com', isActive: true },
  { id: 2, firstname: 'Victoria', lastname: 'Smith', email: 'victoria.smith@gmail.com', isActive: true },
  { id: 3, firstname: 'Jacob', lastname: 'Brown', email: 'jacob.brown@gmail.com', isActive: true },
  { id: 4, firstname: 'Stephanie', lastname: 'Cameron', email: 'stephanie.cameron@gmail.com', isActive: true },
  { id: 5, firstname: 'Dominic', lastname: 'Lyman', email: 'dominic.lyman@gmail.com', isActive: true },
  { id: 6, firstname: 'James', lastname: 'Fraser', email: 'james.fraser@gmail.com', isActive: true },
  { id: 7, firstname: 'Pippa', lastname: 'Johnston', email: 'pippa.johnston@gmail.com', isActive: true },
  { id: 8, firstname: 'Rachel', lastname: 'Carr', email: 'rachel.carr@gmail.com', isActive: true },
  { id: 9, firstname: 'Claire', lastname: 'Anderson', email: 'claire.anderson@gmail.com', isActive: false },
  { id: 10, firstname: 'Diane', lastname: 'Hughes', email: 'diane.hughes@gmail.com', isActive: false }
];

const resolvers = {
  Query: {
    persons: (root) => {
      return DATA;
    },
    person: (root, { id }) => {
      return DATA.find(p => p.id === id);
    }
  },
  Mutation: {
    update: (root, { id, firstname, lastname, isActive }) => {
      const i = DATA.findIndex(e => e.id === id);
      if (i >= 0) {
        const p = DATA[i];
        p.firstname = firstname;
        p.lastname = lastname;
        p.isActive = isActive;
        return p;
      }
      return null;
    }
  }
};

export default resolvers;