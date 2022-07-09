import styled from "styled-components";

export const Main = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
  
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
