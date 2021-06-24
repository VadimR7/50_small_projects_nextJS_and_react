import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    color: rgba(179, 131, 226);
    font-size: 10rem;
    text-align: center;
    opacity: 0.4;
  }

  form {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    width: 400px;
  }

  .input {
    border: none;
    color: #444;
    font-size: 2rem;
    padding: 1rem 2rem;
    display: block;
    width: 100%;
  }

  .input::placeholder {
    color: #d5d5d5;
  }

  .input:focus {
    outline-color: rgba(179, 131, 226);
  }

  .todos {
    background-color: #fff;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .todos li {
    border-top: 1px solid #e5e5e5;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }

  .todos li.completed {
    color: #b6b6b6;
    text-decoration: line-through;
  }

  small {
    color: #b5b5b5;
    margin-top: 3rem;
    margin-bottom: 5rem;
    text-align: center;
  }

  .notification-container {
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .notification {
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  .notification-btn {
    background-color: rgb(102, 51, 153, 0.9);
    color: #fff;
    font-family: inherit;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    margin: 1rem 1.5rem;
    width: 100px;
    padding: 0.5rem;
    cursor: pointer;
  }

  .notification-btn:hover {
    background-color: rgb(102, 51, 153);
  }

  .notification-btn:active {
    transform: scale(0.98);
  }

  @media (max-width: 680px) {
    h1 {
      font-size: 5rem;
    }
    form {
      width: 350px;
    }
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
