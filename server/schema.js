module.exports = `
type Query {
  """
  all records
  params:
  - count: restrict to the first n albums
  - withCoverRecords: also include records from the chapter covers
  """
  records(count: Int = -1, withCoverRecords: Boolean = false): [Record!]

  """
  records from the chapter covers
  """
  coverRecords: [Record!]

  """
  random album, non deterministic
  """
  randomRecord: Record
}

type PotentialError {
  error: String
}

input RecordInput {
  id: ID!
  title: String
  artist: String
}

type Mutation {
  addRecord(record: RecordInput): PotentialError
}

type Record {
  id: ID!
  title: String
  artist: String
  cover: String
  reason: String
}
`;
