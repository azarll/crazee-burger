import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  value,
  handleChange,
  Icon,
  ...extraProps
}) {
  return (
    <InputStyled>
      {Icon}
      <input onChange={handleChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0; // could be handle in Parent too
  /* white-space: nowrap; */

  .icon {
    font-size: ${theme.fonts.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
    /* min-width: 1em; // that way, the icon size is NOT affected */
  }

  input {
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    width: 100%;
    /* display: flex; */
    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
