* `Query` ist always the root of the Graph
* `Mutation`s and `Subscription`s can be defined accordingly

```graphql
type Query {
  """
  random album, non deterministic
  """
  randomRecord: Record
}

type Record {
  id: ID!
  title: String
  artist: String
  cover: String
  reason: String
}
```
