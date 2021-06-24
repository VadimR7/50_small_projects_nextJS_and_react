import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .toggle-container {
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 200px;
  }

  .toggle {
    visibility: hidden;
  }

  .label {
    background-color: #d0d0d0;
    border-radius: 50px;
    display: inline-block;
    cursor: pointer;
    width: 80px;
    height: 40px;
    margin: 0 15px 0;
    position: relative;
  }

  .toggle:checked + .label {
    background-color: #8544ad;
  }

  .ball {
    background-color: #fff;
    height: 34px;
    width: 34px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    align-items: center;
    justify-content: center;
    animation: slideOff 0.3s linear forwards;
  }

  .toggle:checked + .label .ball {
    animation: slideOn 0.3s linear forwards;
  }

  @keyframes slideOn {
    0% {
      transform: translateX(0) scale(1);
    }
    50% {
      transform: translateX(20px) scale(1.2);
    }
    100% {
      transform: translateX(40px) scale(1);
    }
  }

  @keyframes slideOff {
    0% {
      transform: translateX(40px) scale(1);
    }
    50% {
      transform: translateX(20px) scale(1.2);
    }
    100% {
      transform: translateX(0) scale(1);
    }
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
