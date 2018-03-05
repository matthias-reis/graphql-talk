Schema is defined by a DSL called **SDL** Schema Definition Language

* **Strongly typed**

- Scalars: `Int`, `Float`, `String`, `Boolean`, `ID`, Enumerations
- Listings: `[String]`
- Mandatory fields: `String!`
- Composite object types defined by `type Record`
- typed Attributes: `records(filter: String): [Record]`
- Comments for Documentation (used in GraphiQL)
- Interfaces (for Composition)
- Directives (specific to the server implementations)
