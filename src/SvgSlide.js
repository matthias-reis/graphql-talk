import React from 'react';
import styled from 'styled-components';

const SvgContainer = styled.div`
  width: 80%;
  max-height: 80%;

  svg {
    width: 100%;
  }
`;
const SvgSlide = ({ content }) => {
  return <SvgContainer dangerouslySetInnerHTML={{ __html: content }} />;
};

export default SvgSlide;
