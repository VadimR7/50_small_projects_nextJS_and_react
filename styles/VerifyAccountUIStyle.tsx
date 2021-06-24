import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fbfcfe;
  min-height: 100vh;
  width: 100%;
  font-family: 'Muli', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: #fff;
    border: 2px black solid;
    border-radius: 10px;
    padding: 30px;
    max-width: 1000px;
    text-align: center;
  }

  .code-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 20px;
  }

  .code {
    border-radius: 5px;
    font-size: 75px;
    height: 120px;
    width: 100px;
    border: 1px solid #eee;
    margin: 1%;
    text-align: center;
    font-weight: 300;
    -moz-appearance: textfield;
  }

  .code::-webkit-outer-spin-button,
  .code::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .code:valid {
    border-color: #3498db;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
  }

  .info {
    background-color: #eee;
    display: inline-block;
    padding: 10px;
    line-height: 20px;
    max-width: 400px;
    color: #777;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    .code-container {
      flex-wrap: wrap;
    }

    .code {
      font-size: 60px;
      height: 80px;
      max-width: 70px;
    }
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
