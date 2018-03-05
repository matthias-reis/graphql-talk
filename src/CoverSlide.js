import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  position: absolute;
  bottom: 10vh;
  right: 10vh;
  padding: 1rem;
  background: #0008;
  text-align: right;
  h1 {
    font-size: 10vh;
    margin: 0;
  }
  h2 {
    font-size: 5vh;
    margin: 0;
    font-weight: 300;
  }
`;

export default ({ image, title, subtitle }) => (
  <Title>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </Title>
);
