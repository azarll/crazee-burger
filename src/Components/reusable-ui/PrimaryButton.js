import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, ...extraProps }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.P0};
  color: ${theme.colors.white};
  background-color: ${theme.colors.loginButton};
  border: 1px solid ${theme.colors.loginButton};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.loginButton};
    border: 1px solid ${theme.colors.loginButton};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.loginButton};
    border: 1px solid ${theme.colors.loginButton};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
