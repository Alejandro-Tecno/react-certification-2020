import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"



function NotFoundPage() {
  return (
    <StyledNotFound>
      <h1>Jhonny is lost :(</h1>
      <Link to="/" className="home-link">
      <button type="button">
      Get me back to Home
     </button>
      </Link>
      <img src="404.gif" alt="page not found" />
    </StyledNotFound>
  );
}

const StyledNotFound = styled.section`
display: flex;
flex-direction:column;
align-items:center;
h1{
  font-size: 4rem;
}
button{
  background: #a99cee;
  height: 3rem;
  font-size: 2rem;
  border-radius: 10px;
  &:hover{
    background: #baaef5;
    transform: scale(1.02);
  }
}
`


export default NotFoundPage;
