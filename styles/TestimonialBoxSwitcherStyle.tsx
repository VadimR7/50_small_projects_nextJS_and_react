import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .testimonial-container {
    background-color: #476ce4;
    color: #fff;
    border-radius: 15px;
    margin: 20px auto;
    padding: 50px 80px;
    max-width: 768px;
    position: relative;
  }

  .fa-quote {
    color: rgba(255, 255, 255, 0.3);
    font-size: 28px;
    position: absolute;
    top: 70px;
  }

  .fa-quote-right {
    left: 40px;
  }

  .fa-quote-left {
    right: 40px;
  }

  .testimonial {
    line-height: 28px;
    text-align: justify;
  }

  .user {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user .user-image {
    border-radius: 50%;
    height: 75px;
    width: 75px;
    object-fit: cover;
  }

  .user .user-details {
    margin-left: 10px;
  }

  .user .username {
    margin: 0;
  }

  .user .role {
    font-weight: normal;
    margin: 10px 0;
  }

  .progress-bar {
    background-color: #fff;
    height: 4px;
    width: 100%;
    transform-origin: left;
  }

  @keyframes grow {
    0% {
      transform: scaleX(0);
    }
  }

  @media (max-width: 768px) {
    .testimonial-container {
      padding: 20px 30px;
    }

    .fa-quote {
      display: none;
    }
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
