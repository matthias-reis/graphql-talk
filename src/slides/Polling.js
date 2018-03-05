import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Record from './Record';

const withRandomRecord = graphql(gql`
  query RandomRecord {
    randomRecord {
      id
      title
      artist
      cover
      reason
    }
  }
`);

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

class RandomRecord extends PureComponent {
  render() {
    return [
      <Record {...this.props.data.randomRecord} key={1} />,
      <Buttons key={2}>
        <Button onClick={() => this.props.data.startPolling(1000)}>
          Start
        </Button>
        <Button onClick={() => this.props.data.stopPolling()}>Stop</Button>
      </Buttons>
    ];
  }
}

export default withRandomRecord(RandomRecord);
