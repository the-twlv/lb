import styled from "styled-components"
import { motion } from "framer-motion"

export const Main = styled.main`
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`

export const VerticalLineWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 5%;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 999;
`

export const VerticalLine = styled(motion.div)`
  width: 2px;
  height: 100vh;
  background-color: ${(props) => props.color || "white"};
`

export const HeroSection = styled.section`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: left;
  margin-bottom: 4rem;
  
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 60vw;
  aspect-ratio: 4 / 5;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  display: block;
`

export const TextWrapper = styled.div`
  position: absolute;
  top: 60%;
  right: 0;
  transform: translate(50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
  pointer-events: none;
`

export const Heading = styled.h1`
  font-family: "TheQualified";
  font-size: 5.5rem;
  letter-spacing: .2rem;
  line-height: 1.1;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 15rem;
  }
`

export const SubHeading = styled.p`
  font-family: "IBMPlexSans";
  font-size: 1rem;
  line-height: 1.6;
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

export const PortfolioTitle = styled.h2`
  font-family: "Thrillers";
  font-size: 2.5rem;
  margin: 1rem 0 0;

  @media (min-width: 768px) {
    font-size: 7rem;
    margin-top: 3.5rem;
  }
`

export const AboutButton = styled.button`
  border: 1px solid white;
  margin: 2rem 0;
  padding: 0.5rem 1.5rem;
  font-family: "CourierPrime";
  font-size: 0.875rem;
  background: transparent;
  color: white;
  border-radius: 0.375rem;
  transition: 0.3s;
  align-self: flex-start;
`

export const Bio = styled.div`
  max-width: 60vw;
  font-family: "IBMPlexSans";
  font-size: 1rem;
  text-align: left;
  margin-top: 2rem;
  align-self: flex-start;
  @media (min-width: 768px) {
    max-width: 40vw;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
    a {
    text-decoration: underline;
    color: #9c6644;
  }
`

export const Footer = styled.footer`
  margin-top: 5rem;
  border-top: 0.5px #fff solid;
  text-align: center;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: "IBMPlexSans";
  width: 100%;

  .footer-title {
    font-family: "TheQualified";
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }

  .footer-subtitle {
    font-family: "TheQualified";
    font-size: 1rem;
    margin: 0.75rem 0;
  }

  a {
    text-decoration: underline;
    color: inherit;
  }
`
