import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typedefs';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;