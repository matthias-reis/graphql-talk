import styled from 'styled-components';

const FullSize = styled.div`
  background: ${props => `url(${props.background})`} 50% 50%;
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

FullSize.displayName = 'FullSize';

export default FullSize;
