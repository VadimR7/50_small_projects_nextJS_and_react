import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(155, 89, 182, 0.7);
  min-height: 100vh;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  .phone {
    position: relative;
    overflow: hidden;
    border: 3px solid #eee;
    border-radius: 15px;
    height: 600px;
    width: 340px;
  }

  .phone .content {
    opacity: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100% - 60px);
    width: 100%;
    transition: opacity 0.4s ease;
  }

  .phone .content.show {
    opacity: 1;
  }

  nav {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-top: -5px;
    width: 100%;
  }

  nav ul {
    background-color: #fff;
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 60px;
  }

  nav ul li {
    color: #777;
    cursor: pointer;
    flex: 1;
    padding: 10px;
    text-align: center;
  }

  nav ul li p {
    font-size: 12px;
    margin: 2px 0;
  }

  nav ul li:hover,
  nav ul li.active {
    color: #8e44ad;
  }
`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
