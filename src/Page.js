import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Progress from './Progress';
import FullSize from './FullSize';

const Container = styled.div`
  width: 80vw;
  height: 70vh;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;
const Headline = styled.h1`
  width: 80vw;
  font-size: 3rem;
  font-weight: 700;
  border-bottom: 1px dashed #fff8;
`;

class Page extends PureComponent {
  componentWillMount() {
    this.props.setGraphiQLVisible(this.props.withGraphiQL);
  }

  render() {
    const Slide = this.props.component;
    const { number, count, headline, background } = this.props;
    return (
      <FullSize background={background}>
        {headline && <Headline>{headline}</Headline>}
        <Container>{Slide && <Slide />}</Container>
        <Progress number={number} count={count} />
      </FullSize>
    );
  }
}

export default Page;
