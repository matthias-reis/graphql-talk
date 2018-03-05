import React from 'react';
import Md from 'react-markdown';
import styled from 'styled-components';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/styles/hljs';

const SyntaxHighlighterWrapper = styled.div`
  pre {
    width: 70vw;
  }
`;

const CodeBlock = data => {
  return (
    <SyntaxHighlighterWrapper>
      <SyntaxHighlighter lang={data.language} style={hopscotch}>
        {data.value}
      </SyntaxHighlighter>
    </SyntaxHighlighterWrapper>
  );
};

const MdSlide = ({ content }) => {
  return (
    <Md
      source={content}
      renderers={{
        code: CodeBlock
      }}
    />
  );
};

export default MdSlide;
