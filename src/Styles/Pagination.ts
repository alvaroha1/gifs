import styled from "styled-components";

interface ArrowProps {
  selected?: boolean;
}

export const Number = styled.button<ArrowProps>`
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  align-items: center;
  padding: 8px;
  pointer-events: ${(props) => (props.selected ? "selected" : "auto")};
  opacity: ${(props) => (props.selected ? "0.4" : "1")};
  cursor: ${(props) => (props.selected ? "not-allowed" : "pointer")};

  &:hover {
    text-decoration: underline;
  }
`;

export const HideDivMobile = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const PaginationCard = styled.div`
  padding: 20px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  background-color: #fafafa;
  border-radius: 5px;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;
  margin: 6px;
  max-width: 136vh;
  overflow: auto;
  @media only screen and (max-width: 600px) {
    padding: 10px;
    width: auto;
  }
`