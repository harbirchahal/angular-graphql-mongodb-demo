import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './schema';

const URL = 'http://localhost';
const PORT = 3001;
const app = express();

app.use(cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(PORT, () => {
  console.log(`Visit ${URL}:${PORT}`)
});
