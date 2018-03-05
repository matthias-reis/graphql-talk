* called when the server tries to resolve a query
* a simple dictionary of callback functions
* can return `Promise`s
* function signature: `(parent, args, context)`
  * `parent`: The result of the parent resolver
  * `args`: The optional arguments from the query
  * `context`: Shared object through all resolvers

```javascript
const records = require('./data');

const resolvers = {
  Query: {
    /* count = number of records to return, could be async */
    records: (_, { count }) => records.slice(0, count)
  }
};
```
