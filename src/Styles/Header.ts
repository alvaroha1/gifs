import styled from "styled-components";

export const Main = styled.header`
  margin: 0px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #fafafa;
  color: #000;
  border-bottom: 1px solid #eaeaea;
  height: 60px;
  flex-shrink: 0;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;


export const Headers = styled.div`
  font-size: 60%;
  padding: 0px 20px;
  h1, h2 {
    margin: 6px 20px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;