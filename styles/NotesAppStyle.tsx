import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #7bdaf3;
  min-height: 100vh;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
  padding-top: 3rem;

  .add {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background-color: #9ec862;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .note {
    background-color: #fff;
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
    margin: 30px 20px;
    height: 400px;
    width: 400px;
  }
  .note .tools {
    background-color: #9ec862;
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
  }

  .note .tools button {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 0.5rem;
  }
  .note textarea {
    outline: none;
    font-family: inherit;
    font-size: 1.2rem;
    border: none;
    height: 400px;
    width: 100%;
    padding: 20px;
  }

  .main {
    padding: 20px;
  }

  .hidden {
    display: none;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
