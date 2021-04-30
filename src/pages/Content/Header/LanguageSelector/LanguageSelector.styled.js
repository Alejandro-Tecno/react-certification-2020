import styled from "styled-components";
import device from "../../../../utils/breakpoints";
import { Themes } from "../../../../utils/themes";

export const StyledSelector = styled.div`
  @media ${device.xs} {
    /* display: none; */
  }
`;

export const StyledList = styled.div`
  background: ${(props) =>
    props.isDark ? Themes.dark.headerColor : Themes.ligth.headerColor};
  color: #fff;
  .MuiListItem-button:hover {
    background: ${(props) =>
      !props.isDark ? Themes.dark.headerColor : Themes.ligth.headerColor};
  }
  ul {
    padding-top: 2px;
    padding-bottom: 2px;
}
    li {
      color: #d1d1d1;
      line-height: 2rem;
    }
  
`;
