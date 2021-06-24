import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }

  .carousel {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    height: 530px;
    width: 500px;
    overflow: hidden;
  }

  .image-container {
    display: flex;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    background-color: rebeccapurple;
    color: #fff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    width: 49.5%;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn:focus {
    outline: none;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
