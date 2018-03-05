import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Record from './Record';

const withRecords = graphql(gql`
  query Records($count: Int) {
    records(count: $count) {
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

const PlainRecords = ({ data }) => {
  return (
    <Container>
      {data.records &&
        data.records.map(record => (
          <Record cover key={record.id} {...record} />
        ))}
    </Container>
  );
};

const Records = withRecords(PlainRecords);

export default class extends PureComponent {
  state = { count: 2 };
  render() {
    return [
      <Records count={this.state.count} />,
      <Buttons>
        <Button onClick={() => this.setState({ count: 2 })}>2</Button>
        <Button onClick={() => this.setState({ count: 4 })}>4</Button>
        <Button onClick={() => this.setState({ count: 6 })}>6</Button>
      </Buttons>
    ];
  }
}
