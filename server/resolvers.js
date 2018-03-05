const enhanceRecords = records =>
  records.map(record => {
    record.cover = `http://localhost:3001/covers/${record.id}.jpg`;
    return record;
  });

let data = require('./data');
let records = enhanceRecords(data);

module.exports = {
  Query: {
    records(_, { count, withCoverRecords }) {
      const base = withCoverRecords
        ? records
        : records.filter(record => !record.isCover);
      return base.slice(0, count);
    },
    coverRecords() {
      return records.filter(record => record.isCover);
    },
    randomRecord() {
      const index = parseInt(Math.random() * records.length, 10);
      return records[index];
    }
  },
  Mutation: {
    addRecord(_, { record }) {
      data = [record, ...data];
      records = enhanceRecords(data);
    }
  }
};
