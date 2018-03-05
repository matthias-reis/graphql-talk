Initialize the **Apollo Client**

```js
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3001/graphql' }), // 1
  cache: new InMemoryCache() // 2
});

render(
  <ApolloProvider client={client}>
    <MyApp />
  </ApolloProvider>,
  document.getElementById('root')
); // 3
```

1.  **`link`**: Defines the connection to the server side endpoint. You can hand
    over a custom `fetch` implementation and authorization options (e.g.
    credentials)

2.  **`cache`**: A cache instance, usually an Apollo `InMemoryCache`

3.  Then use it in a **Provider** and wrap it around your application
