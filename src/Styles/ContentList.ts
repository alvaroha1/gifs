import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  text-align: center;
  & > span {
    padding: 8px 4px;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.span`
  font-weight: 700;
`;

export const HeaderSort = styled.span`
  font-weight: 700;
  cursor: pointer;
`;




