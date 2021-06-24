import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #3b3b98;
  font-family: 'Muli', sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  h2 {
    margin: 10px 0 20px;
    text-align: center;
  }

  .container {
    background-color: #23235b;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
    padding: 20px;
    width: 350px;
    max-width: 100%;
  }

  .result-container {
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 12px 10px;
    height: 50px;
    width: 100%;
  }

  .result-container #result {
    word-wrap: break-word;
    max-width: calc(100% - 40px);
  }

  .btn {
    border: none;
    background-color: #3b3b98;
    color: #fff;
    font-size: 16px;
    padding: 8px 12px;
    cursor: pointer;
  }

  .result-container .btn {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .btn-large {
    display: block;
    width: 100%;
  }

  .setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
