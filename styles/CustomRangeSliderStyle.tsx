import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c6cfe2 100%);
  min-height: 100vh;
  width: 100%;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    position: absolute;
    top: 10px;
  }

  .range-container {
    position: relative;
  }

  input[type='range'] {
    width: 300px;
    margin: 18px 0;
    -webkit-appearance: none;
  }

  input[type='range'] {
    outline: none;
  }

  input[type='range'] + label {
    background-color: #fff;
    position: absolute;
    top: -25px;
    left: 110px;
    width: 80px;
    padding: 5px 0;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3s);
  }

  /* Chrome and Safari */
  input[type='range']::-webkit-slider-runnable-track {
    background-color: purple;
    border-radius: 4px;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid purple;
    margin-top: -7px;
    cursor: pointer;
  }

  /* Firefox */
  input[type='range']::-moz-range-track {
    background-color: purple;
    border-radius: 4px;
    width: 100%;
    height: 13px;
    cursor: pointer;
  }

  input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid purple;
    margin-top: -7px;
    cursor: pointer;
  }

  /* IE */
  input[type='range']::-ms-track {
    background-color: purple;
    border-radius: 4px;
    width: 100%;
    height: 13px;
    cursor: pointer;
  }

  input[type='range']::-ms-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid purple;
    margin-top: -7px;
    cursor: pointer;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
