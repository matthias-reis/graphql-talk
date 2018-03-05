import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledProgressContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  border-top: 1px solid #fff;
  background: #fff8;
`;

const StyledProgress = styled.div`
  height: 9px;
  background: #fff;
  width: ${props => parseInt(props.width * 100, 10) + '%'};
`;

class Progress extends PureComponent {
  render() {
    const { number, count } = this.props;
    return (
      <StyledProgressContainer>
        <StyledProgress width={number / count} />
      </StyledProgressContainer>
    );
  }
}

export default Progress;
