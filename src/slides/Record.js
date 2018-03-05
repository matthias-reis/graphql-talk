import React from 'react';
import styled from 'styled-components';

import MdSlide from '../MdSlide';

const StyledRecord = styled.div`
  width: 20vw;
  flex: 0 0 auto;
  margin: 0.25rem;
  padding: 0.5rem;
  background: #fffa;
  text-align: center;
`;

const Cover = styled.img`
  width: 10vw;
  height: 10vw;
`;

const Artist = styled.div`
  margin-top: 0.6rem;
  text-transform: uppercase;
  color: #777;
  font-size: 1.2rem;
`;

const Title = styled.div`
  color: #000;
  font-size: 1.8rem;
`;

const Reason = styled.div`
  margin-top: 0.6rem;
  color: #000;
  p {
    font-size: 1.2rem;
  }
`;
const Record = ({
  cover,
  artist,
  title,
  reason,
  coverOnly = false,
  withReason = false
}) => (
  <StyledRecord>
    <Cover src={cover} />
    {!coverOnly && <Artist>{artist}</Artist>}
    {!coverOnly && <Title>{title}</Title>}
    {!coverOnly &&
      withReason &&
      reason && (
        <Reason>
          <MdSlide content={reason} />
        </Reason>
      )}
  </StyledRecord>
);

export default Record;
