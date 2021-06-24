import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  h4 {
    font-size: 20px;
    margin: 5px;
    text-transform: uppercase;
  }

  .counter {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .counter.hide {
    transform: translate(-50%, -50%) scale(0);
    animation: hide 0.2s ease-out;
  }

  @keyframes hide {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }

    100% {
      transform: translate(-50%, -50%) scale(0);
    }
  }

  .final {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    text-align: center;
  }

  .final.show {
    transform: translate(-50%, -50%) scale(1);
    animation: show 0.2s ease-out;
  }

  @keyframes show {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }

    30% {
      transform: translate(-50%, -50%) scale(1.4);
    }

    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .nums {
    color: #3498db;
    font-size: 50px;
    position: relative;
    overflow: hidden;
    width: 250px;
    height: 50px;
  }

  .nums span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(130deg);
    transform-origin: bottom center;
  }

  .nums span.in {
    transform: translate(-50%, -50%) rotate(0deg);
    animation: goIn 0.5s ease-in-out;
  }

  .nums span.out {
    animation: goOut 0.5s ease-in-out;
  }

  @keyframes goIn {
    0% {
      transform: translate(-50%, -50%) rotate(130deg);
    }

    30% {
      transform: translate(-50%, -50%) rotate(-20deg);
    }

    60% {
      transform: translate(-50%, -50%) rotate(10deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  @keyframes goOut {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    60% {
      transform: translate(-50%, -50%) rotate(20deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(-130deg);
    }
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
