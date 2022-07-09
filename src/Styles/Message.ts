import styled from 'styled-components'

export const Box = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
  box-shadow: 0px 2px 4px rgba(0,0,0,.1);
  transition: box-shadow .15s ease;
  margin: 14px 0px;
`

export const Text = styled.p`
  padding: 4px;
  color: #0e1012;
  background-color: transparent;
  margin: 0px;
`

export const ErrorBox = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
  transition: box-shadow .15s ease;
  margin: 14px 0px;
  border: 1px solid #fc0313;
`

export const ErrorText = styled.p`
  padding: 4px;
  color: #fc0313;
  background-color: transparent;
  margin: 0px;
`

export const SuccessBox = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
  transition: box-shadow .15s ease;
  margin: 14px 0px;
  border: 1px solid #27e631;
`

export const SuccessText = styled.p`
  padding: 4px;
  color: #27e631;
  background-color: transparent;
  margin: 0px;
`