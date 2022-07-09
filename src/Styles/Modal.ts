import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

export const Content = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 98vh;
  overflow: auto;
`;

export const Title = styled.h4`
  margin: 0;
`;

export const Body = styled.div`
  padding: 6px 20px;
`;

export const Padding = styled.div`
  padding: 10px;
`;

export const ButtonDiv = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 0 12px;
  height: 40px;
  width: 240px;
  padding: 0px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #0e1012;
    border-color: #0e1012;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonText = styled.p`
  margin-left: 10px;
`;
