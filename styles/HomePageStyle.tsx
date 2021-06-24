import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  margin-top: 50px;
  text-align: center;
`;

export const Nav = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  max-height: 50px;
  left: 0;
  width: 100%;
  background-color: lightgreen;
  z-index: 100;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 15px;
`;

export const StyledCard = styled.div`
  width: 280px;
  height: 360px;
  border-radius: 15px;
  margin: 15px 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);

  :hover {
    transform: translateY(20px);
  }

  :hover:before {
    opacity: 1;
  }

  :hover .info {
    opacity: 1;
    transform: translateY(0px);
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: fill;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }

  img.active {
    opacity: 0;
  }

  :hover img.static {
    opacity: 0;
  }

  :hover img.active {
    opacity: 1;
  }

  .info {
    position: relative;
    z-index: 3;
    color: white;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
  }
  .info h1 {
    margin: 15px 0px;
  }

  .info button {
    font-family: inherit;
    padding: 0.6rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
  }

  .info button:hover {
    background: dodgerblue;
    color: white;
  }
`;

export const Button = styled.button`
  background-color: hsl(199, 100%, 60%);
  text-decoration: none;
  color: black;
  width: 100px;
  height: 40px;
  border: 1px solid lightgray;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  border: none;

  :hover {
    transform: scale(0.98);
    transition: transform 0.5s ease;
    background-color: hsl(199, 100%, 52%);
    outline: none;
  }
`;

export const MainButton = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: hsl(199, 79%, 53%);
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
`;

export default {
  Wrapper,
  Nav,
  Main,
  Button,
  MainButton,
  StyledCard,
};
