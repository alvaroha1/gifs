import React from "react";
import { ButtonStyled } from "../Styles/Button";

interface ButtonProps {
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  dataTestId?: string;
}

export default function Button({
  onClick,
  name,
  disabled,
  dataTestId,
}: ButtonProps) {
  return (
    <ButtonStyled
      data-testid={dataTestId}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </ButtonStyled>
  );
}
