import * as React from "react"
import Seo from "../components/SEO"
//import { motion } from "framer-motion"

import {
    Main,
    HeroSection,
    ImageWrapper,
    Image,
    TextWrapper,
    Heading,
    SubHeading,
    PortfolioTitle,
    AboutButton,
    Bio,
    Footer,
    VerticalLineWrapper,
    VerticalLine,   
  } from "../styles/HomeStyles"


export default function Home() {
  return (
    <>
    <Seo title="Liya Blogs" />
    <Main>
    <VerticalLineWrapper>
  {["black", "white", "green", "pink", "black", "white", "green"].map((color, i) => (
    <VerticalLine
      key={i}
      color={color}
      animate={{
        x: [0, 1, 0],
      }}
      transition={{
        duration: 0.9 + Math.random() * 0.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: Math.random(),
      }}
    />
  ))}
</VerticalLineWrapper>
    <AboutButton>About Me</AboutButton>

     <HeroSection>
        <ImageWrapper>
          <Image src="/liya-cover.jpg" alt="Liya Blogs" />
          <TextWrapper>
            <Heading>
              Liya <br /> Blogs
            </Heading>
            <SubHeading>
              Lifestyle Blogger &<br /> Media Creative
            </SubHeading>
            <PortfolioTitle>The Portfolio</PortfolioTitle>
          </TextWrapper>
        </ImageWrapper>
      </HeroSection>
      
      <Bio>
        <p>
          Liya Blogs is a lifestyle blogger and media creative of proud
          Eri-Ethiopian descent, known for her thoughtful storytelling and
          culturally rooted perspective.
        </p>
        <p>
          As the founder of{" "}
          <a
            href="https://www.instagram.com/shopsundaysociety"
            target="_blank"
            rel="noopener noreferrer"
          >
            @shopsundaysociety
          </a>
          , a fashion label made in Kenya and available globally via{" "}
          <a
            href="https://arrai.shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arrai Shop
          </a>
          , she fuses heritage with modern design to celebrate
          self-expression and redefine East African fashion narratives.
        </p>
        <p>
          Through digital content, brand partnerships, and visual storytelling,
          Liya creates with empathy, curiosity, and intention; holding space for
          culture, beauty, and the everyday moments that shape us.
        </p>
      </Bio>

      <Footer>
        <p className="footer-title">Liya Blogs</p>
        <p className="footer-subtitle">Pilates, matcha, inner peace, repeat.</p>
        <p>
            All Rights Reserved • © 2025 • Website by{" "}
            <a href="https://www.netflix.com/ke/title/70264888">????????????</a>
        </p>
       
        </Footer>
    </Main>
    </>
  )
}
