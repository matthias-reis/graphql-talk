And finally, you enhance a component with it:

```js
const Comp = ({ data, mutate }) => {
  return (
    <div>
      <SomeComponent data={data.records} />
      <Button onClick={() => mutate().then(() => data.refetch())}>Add</Button>
    </div>
  );
};

export default enhance(Comp);
```

* The component gets `data` from the query and a `mutate()` function from the
  mutation
* `mutate()` can be called whereever needed (e.g. in a click handler)
* As `mutate()` is a Promise, you can trigger things on success (e.g. a
  `refetch()` of all data)
