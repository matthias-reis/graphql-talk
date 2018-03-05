const express = require('express');
const bodyParser = require('body-parser');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors');

app = express();

app.use(cors());

app.use('/covers', express.static(__dirname + '/covers'));

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: makeExecutableSchema({ typeDefs, resolvers }) })
);

app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3001, () => {
  console.log('GraphQL server listening on http://localhost:3001');
});
