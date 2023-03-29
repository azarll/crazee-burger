import { Link } from "react-router-dom";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  .right-side {
    background: pink;
  }
  .left-side {
    background: purple;
  }
`;
