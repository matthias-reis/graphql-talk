```js
const withRecords = graphql(gql`
  query Records($count: Int) { ${/* 1 */}
    records(count: $count) {
      id
      title
      artist
      cover
      reason
    }
  }
`);

const Records = withCoverRecords(PlainCoverRecords);

export default () => <Records count={4} />; // 2
```

1.  Define arguments for the query (count)
2.  The arguments are resolved from incoming properties

You can also calculate the arguments and other options from incoming props.
