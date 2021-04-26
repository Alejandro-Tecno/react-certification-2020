import React from "react";
import styled from "styled-components";
import Cardlist from "../../pages/Content/CardList";
import device from "../../utils/breakpoints";

function Homepage({title}) {
  return (
    <StyledMain>
      <h2 className="recomended-text">{title}</h2>
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
    margin: 20px 0px 2px 30px;
    @media ${device.xs} {
    font-size:2rem;
    margin: 10px 0px 2px 10px;
  }
  }
`;

export default Homepage;
