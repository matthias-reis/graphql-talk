import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Record from './Record';

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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Query = ({ data }) => {
  return (
    <Container>
      {data.coverRecords &&
        data.coverRecords.map(record => (
          <Record withReason key={record.id} {...record} />
        ))}
    </Container>
  );
};

export default withCoverRecords(Query);
