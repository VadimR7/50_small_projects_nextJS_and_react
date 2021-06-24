import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 150px;
  }

  .text {
    text-transform: uppercase;
  }

  .nav-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
  }

  .open-btn {
    position: fixed;
    top: 10px;
    left: 10px;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav.visible {
    transform: translateX(0);
  }

  .nav-black {
    background-color: rgba(34, 31, 31);
    width: 60%;
    max-width: 480px;
    min-width: 320px;
    transition-delay: 0.4s;
  }

  .nav-black.visible {
    transition-delay: 0s;
  }

  .nav-red {
    background-color: rgba(229, 9, 20);
    width: 95%;
    transition-delay: 0.2s;
  }

  .nav-red.visible {
    transition-delay: 0.2s;
  }

  .nav-white {
    background-color: #fff;
    width: 95%;
    padding: 40px;
    position: relative;
    transition-delay: 0s;
  }

  .nav-white.visible {
    transition-delay: 0.4s;
  }

  .close-btn {
    position: absolute;
    top: 40px;
    right: 30px;
    opacity: 0.3;
  }

  .list {
    list-style-type: none;
    padding: 0;
  }

  .list li {
    margin: 20px 0;
  }

  .list li a {
    color: rgba(34, 31, 31);
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .list ul {
    list-style-type: none;
    padding-left: 20px;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
