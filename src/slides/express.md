Just import some packages

```js
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
```

And setup the middleware:

```js
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: makeExecutableSchema({ typeDefs, resolvers }) })
);

//Optional: Add a Middleware for the next generation 'PHPMyAdmin'
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
```
