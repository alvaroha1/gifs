import styled from 'styled-components'

export const Card = styled.div`
  padding: 20px;
  overflow: hidden;
  min-width: 300px;
  border: 1px solid #eaeaea;
  background-color: #fafafa;
  border-radius: 5px;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;
  width: 100vh;
  @media only screen and (max-width: 600px) {
    padding: 10px;
    width: auto;
  }
`
export const ItemCard = styled.div`
  padding: 20px;
  overflow: hidden;
  max-width: 200px;
  border: 1px solid #eaeaea;
  background-color: #fafafa;
  border-radius: 5px;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100vh;
  margin: 6px;
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
`
export const Text = styled.p`
  color: #0e1012;
  background-color: transparent;
  text-decoration: none;
  margin: 10px;
`
export const TextBold = styled.p`
  color: #0e1012;
  background-color: transparent;
  text-decoration: none;
  margin: 10px;
  font-weight: 900;
`
