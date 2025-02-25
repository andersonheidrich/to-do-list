import { StyledButton } from "./Button.styles";

const Button = ({ ...props }) => {
  return <StyledButton disableElevation {...props} />;
};

export default Button;
