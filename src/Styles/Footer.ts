import styled from "styled-components";

export const Main = styled.footer`
  margin: 0px;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  color: #000;
  border-top: 1px solid #eaeaea;
  height: 60px;
  flex-shrink: 0;
`;

export const List = styled.ul`
  display: flex;

  list-style-type: none;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    padding: 0px;
  }
`;

export const ListElement = styled.li`
  padding: 0px 20px;
  @media only screen and (max-width: 600px) {
    padding: 6px 40px;
  }
`;

export const HideInMobile = styled.span`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;