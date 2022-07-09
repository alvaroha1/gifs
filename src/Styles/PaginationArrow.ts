import styled from "styled-components";

interface ArrowProps {
  disabled?: boolean;
}

export const LeftArrow = styled.button<ArrowProps>`
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  align-items: center;
  padding: 8px;
  pointer-events: ${props => props.disabled ? "disabled" : "auto"};
  opacity: ${props => props.disabled ? "0.4" : "1"};
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;

export const RightArrow = styled.button<ArrowProps>`
  border: none;
  background-color: transparent;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${props => props.disabled ? "disabled" : "auto"};
  opacity: ${props => props.disabled ? "0.4" : "1"};
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;
