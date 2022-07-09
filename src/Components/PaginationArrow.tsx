import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { LeftArrow, RightArrow } from "../Styles/PaginationArrow";
import { ArrowType } from "../Types/ArrowType";

interface PaginationArrowProps {
  direction: string;
  method: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function PaginationArrow({
  direction,
  method,
  disabled,
}: PaginationArrowProps) {
  if (direction === ArrowType.Left) {
    return (
      <LeftArrow
        data-testid="btn-minus-one"
        onClick={method}
        disabled={disabled}
      >
        <MdArrowBackIos />
      </LeftArrow>
    );
  } else {
    return (
      <RightArrow
        data-testid="btn-plus-one"
        onClick={method}
        disabled={disabled}
      >
        <MdArrowForwardIos />
      </RightArrow>
    );
  }
}
