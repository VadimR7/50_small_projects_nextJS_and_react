import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
  min-height: 100vh;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  .quiz-container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
    width: 600px;
    overflow: hidden;
  }

  .quiz-header {
    padding: 4rem;
  }

  h2 {
    padding: 1rem;
    text-align: center;
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  ul li label {
    cursor: pointer;
  }

  button {
    background-color: #8e44ad;
    border: none;
    color: #fff;
    display: block;
    width: 100%;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: inherit;
    padding: 1.3rem;
  }

  button:hover {
    background-color: #732d91;
  }

  button:active {
    outline: none;
    background-color: #5e3370;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
