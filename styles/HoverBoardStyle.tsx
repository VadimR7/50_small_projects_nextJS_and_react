import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #111;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 400px;
  }

  .color-picker {
    display: flex;
    margin-bottom: 2rem;
    max-width: 400px;
    width: 100%;
    justify-content: space-around;
  }

  .square {
    background-color: #1d1d1d;
    box-shadow: 0 0 2px #000;
    height: 16px;
    width: 16px;
    margin: 2px;
    transition: 2s ease;
  }

  .square:hover {
    transition-duration: 0s;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
