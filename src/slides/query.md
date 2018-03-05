Write a Higher Order Component

```js
const withCoverRecords = graphql(gql`
  query CoverRecords {
    coverRecords {
      id
      title
      artist
      cover
      reason
    }
  }
`);
```

* **graphql**: HOC Generator from Apollo

* **gql**: A query string to AST parser

And then use it whereever you want:

```js
const CoverRecords = withCoverRecords(PlainCoverRecords);
```
