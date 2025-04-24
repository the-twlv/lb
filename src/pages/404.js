import * as React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import { Link } from "gatsby"

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`

const Title = styled.h1`
  font-size: 5rem;
  font-family: 'IBMPlexSans';
  margin-bottom: 1rem;
`

const Message = styled.p`
  font-family: 'IBMPlexSans';
  font-size: 1.25rem;
  max-width: 600px;
  margin-bottom: 2rem;
`

const StyledLink = styled(Link)`
  font-family: 'CourierPrime';
  color: #000;
  background-color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    background-color: #444;
    color: #fff;
  }
`

export default function NotFoundPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>404</Title>
        <Message>Oops! The page you’re looking for doesn’t exist. Maybe try heading back home?</Message>
        <StyledLink to="/">Go Back Home</StyledLink>
      </Wrapper>
    </>
  )
}
