import styled from 'styled-components'

export const ButtonStyled = styled.button`
    border: 1px solid #0e1012;
    border-radius: 5px;
    height: 40px;
    width: 80px;
    padding: 0px 8px;
    cursor: pointer;
    background-color: #0e1012;
    color: #eaeaea;

    &:disabled{
      background-color: #f2f2f2;
      color: #c6c1be;
      border-color: #eaeaea;
      cursor: not-allowed;
    }

    &:hover:enabled{
      color: #0e1012;
      border-color: #0e1012;
      background-color: #eaeaea;
    }
`