import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin: 10px 0 0;
    text-align: center;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
  }

  .container img {
    object-fit: cover;
    margin: 10px;
    height: 300px;
    width: 300px;
    max-width: 100%;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
