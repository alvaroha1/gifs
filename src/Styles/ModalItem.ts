import styled from 'styled-components'

export const Card = styled.div`
  padding: 6px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  background-color: #fafafa;
  border-radius: 5px;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    padding: 10px;
    width: auto;
  }
`

export const TextBox = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: center;
`
export const Text = styled.p`
  color: #0e1012;
  background-color: transparent;
  text-decoration: none;
  margin: 10px;
`
