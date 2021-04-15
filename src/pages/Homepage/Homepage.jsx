import React from "react";
import styled from "styled-components";
import Cardlist from "../../pages/Content/CardList";

function Homepage() {
  return (
    <StyledMain>
      <h2 className="recomended-text">Recommended videos</h2>
      <Cardlist />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .recomended-text {
    font-size: 3rem;
    margin: 20px 0px 2px 50px;
  }
`;

export default Homepage;
