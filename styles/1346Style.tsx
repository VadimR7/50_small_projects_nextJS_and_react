
  import styled from 'styled-components';

  export const Wrapper = styled.div`
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

//remove the line above

  :before{
    content: 'Component is imported'
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
