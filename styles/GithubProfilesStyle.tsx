import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #2a2a72;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 700px;

  input {
    width: 100%;
    display: block;
    background-color: #4c2885;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
    font-family: inherit;
    font-size: 1rem;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(0, 0, 0, 0.1);
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #bbb;
  }
`;

export const Card = styled.div`
  max-width: 800px;
  background-color: #4c2885;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 3rem;
  margin: 0 1.5rem;

  .avatar {
    border-radius: 50%;
    border: 10px solid #2a2a72;
    height: 150px;
    width: 150px;
  }

  .user-info {
    min-width: 300px;
    color: #eee;
    margin-left: 2rem;
  }

  .user-info a {
    color: #fff;
    text-decoration: none;
  }

  .user-info h2 {
    margin-top: 0;
  }

  .user-info ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    max-width: 400px;
  }

  .user-info ul li {
    display: flex;
    align-items: center;
  }

  .user-info ul li strong {
    font-size: 0%.9rem;
    margin-left: 0.5rem;
  }

  .repo {
    text-decoration: none;
    background-color: #212a72;
    color: #fff;
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    .user-info {
      max-width: 400px;
    }
  }
`;

const styles = {
  Wrapper,
  Form,
  Card,
};

export default styles;
