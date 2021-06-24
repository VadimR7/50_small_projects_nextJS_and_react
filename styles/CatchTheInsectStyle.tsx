import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #516dff;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  font-family: 'Press Start 2P', sans-serif;
  text-align: center;

  a {
    color: #fff;
  }

  h1 {
    line-height: 1.4;
  }

  .btn {
    border: 0;
    background-color: #fff;
    color: #516dff;
    padding: 15px 20px;
    font-family: inherit;
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn:focus {
    outline: 0;
  }

  .screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    transition: margin 0.5s ease-out;
  }

  .screen.up {
    margin-top: -100vh;
  }

  .insects-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
  }

  .insects-list li {
    margin: 10px;
  }

  .choose-insect-btn {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    width: 150px;
    height: 150px;
  }

  .choose-insect-btn:hover {
    background-color: #fff;
    color: #516dff;
  }

  .choose-insect-btn:active {
    background-color: rgba(255, 255, 255, 0.7);
  }

  .choose-insect-btn img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  .game-container {
    position: relative;
  }

  .time,
  .score {
    position: absolute;
    top: 20px;
  }

  .time {
    left: 20px;
  }

  .score {
    right: 20px;
  }

  .message {
    line-height: 1.7;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 20px;
    z-index: 100;
    text-align: center;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -150%);
    transition: transform 0.4s ease-in;
  }

  .message.visible {
    opacity: 1;
    transform: translate(-50%, 100%);
  }

  .insect {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 200px;
    left: 300px;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.3s ease-in-out;
  }

  .insect.caught {
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease-in-out;
  }

  .insect img {
    width: 100px;
    height: 100px;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
