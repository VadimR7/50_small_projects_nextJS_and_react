import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .background {
    background: url('https://images.unsplash.com/photo-1556745757-8d76bdb6984b')
      no-repeat center center/cover;
    position: absolute;
    top: -20px;
    left: -20px;
    bottom: -20px;
    right: -20px;
    z-index: -1;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
