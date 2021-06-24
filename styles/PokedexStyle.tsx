import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #efefbb;
  background: linear-gradient(to righ, #d4d3dd, #efefbb);
  min-height: 100vh;
  width: 100%;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    letter-spacing: 3px;
  }

  .poke-container {
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
  }

  .pokemon {
    background-color: #eee;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
  }

  .pokemon .img-container {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    text-align: center;
  }

  .pokemon .img-container img {
    max-width: 90%;
    margin-top: 20px;
  }

  .pokemon .info {
    margin-top: 20px;
  }

  .pokemon .info .number {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.8em;
  }

  .pokemon .info .name {
    margin: 15px 0 7px;
    letter-spacing: 1px;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
