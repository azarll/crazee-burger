import { useState } from "react";
import styled from "styled-components";

export default function Menu() {

// state
const [menu, setproducts] = useState()

// Action


// Render
  return <MenuStyled className="menu">Menu</MenuStyled>;
}

const MenuStyled = styled.div`
  background: purple;
`;
