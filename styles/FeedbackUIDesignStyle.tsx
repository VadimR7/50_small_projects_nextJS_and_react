import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fef9f2;
  min-height: 100vh;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  .panel-container {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    font-size: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
    max-width: 400px;
  }

  .panel-container strong {
    line-height: 20px;
  }

  .ratings-container {
    display: flex;
    margin: 20px;
  }

  .rating {
    flex: 1;
    cursor: pointer;
    padding: 20px;
    margin: 10px 5px;
  }

  .rating:hover,
  .rating.active {
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .rating img {
    width: 40px;
  }

  .rating small {
    color: #555;
    display: inline-block;
    margin: 10px 0 0;
  }

  .rating:hover small,
  .rating.active small {
    color: #111;
  }

  .btn {
    background-color: #302d2b;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 30px;
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .fa-heart {
    color: red;
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
