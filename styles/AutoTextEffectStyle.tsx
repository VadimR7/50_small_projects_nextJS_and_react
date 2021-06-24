import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: darksalmon;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .speed {
    position: absolute;
    bottom: 20px;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    font-size: 18px;
  }

  .speed input {
    width: 50px;
    padding: 5px;
    font-size: 18px;
    background-color: darksalmon;
    border: none;
    text-align: center;
  }

  .speed input:focus {
    outline: none;
  }

  .input-text {
    margin-top: 100px;
  }

  .input-text input {
    width: 300px;
    padding: 10px 3px;
    border: none;
    font-size: 16px;
  }

  .input-text input:focus {
    outline: none;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
