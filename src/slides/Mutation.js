import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Record from './Record';

const withRecords = graphql(gql`
  query Records {
    records(count: 6) {
      id
      title
      artist
      cover
      reason
    }
  }
`);

/*
  {
    id: 'hardcore',
    title: 'Hardcore Will Never Die, But You Will',
    artist: 'Mogwai'
  }
*/
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

const enhance = compose(withRecords, withMutation);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-flow: column;
`;

const Button = styled.button`
  color: #fff;
  background: #1685c5;
  border: 0;
  width: 100px;
  padding: 0.8rem 0;
  margin: 1rem;
  border-radius: 5px;
  font-size: 2rem;
  &:hover {
    background: #349bd6;
  }
`;

const Mutation = ({ data, mutate }) => {
  return [
    <Container key={1}>
      {data.records &&
        data.records.map(record => (
          <Record cover key={record.id} {...record} />
        ))}
    </Container>,
    <Buttons key={2}>
      <Button onClick={() => mutate().then(() => data.refetch())}>Add</Button>
    </Buttons>
  ];
};

export default enhance(Mutation);
