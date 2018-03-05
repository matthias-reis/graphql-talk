The `data` object, that is handed over to the component also contains some neat
helper functions:

* **`refetch()`**: Can be called any time, when the data should be refreshed.

* **`startPolling(interval)`**: Create a repeated fetch (see example) -
  `stopPolling` also exists

* **`fetchMore(options)`**: Used for pagination (e.g. you can add other
  variables)
