import React from "react";
import Cardlist from "../../pages/Content/CardList";
import {StyledMain} from "./Homepage.Styled"

function Homepage({title}) {
  return (
    <StyledMain>
      <h2 className="recomended-text">{title}</h2>
      <Cardlist />
    </StyledMain>
  );
}


export default Homepage;
