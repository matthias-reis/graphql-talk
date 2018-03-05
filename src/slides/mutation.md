A mutation starts with the same higher order component:

```js
const withMutation = graphql(gql`
  mutation AddRecord {
    addRecord(
      record: {
        id: "hardcore"
        title: "Hardcore Will Never Die, But You Will"
        artist: "Mogwai"
      }
    ) {
      error
    }
  }
`);
```

Apollo delivers a compose function to combine several HOCs to one:

```js
const enhance = compose(withRecords, withMutation);
```
