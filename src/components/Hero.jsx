import React ,{useEffect} from "react";
import { styled } from "styled-components";
import Typewriter from "typewriter-effect";
import heroimg from "../assets/images/hero.png";
import Socials from "./Socials";
import {Link} from "react-scroll";
import { useMediaQuery } from "@mantine/hooks";
// import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="home">
      <HeroContainer data-aos="zoom-in">
        <p className="greeting">Hi, my name is</p>
        <div className="title">Nitish Kumar Jha</div>
        <div className="profession">
          I'm a&nbsp;
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [" Web Developer", " Tech Enthusiast"],
            }}
          />
        </div>

        <div className="text">
          I'm person, who has a keen interest in writing clean code, building
          new things from scratch, or tinkering with web in general . Currently,
          I'm focused on building handy applications using technologies .
        </div>
      <Socials />
 {isMobile ? <ButtonBox>
  <Button> <Link
          
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Read more </Link></Button>
  <Button> <Link  href="/doc/Nitish_resume.pdf" download>Resume</Link></Button>
 </ButtonBox>:
        <Button> <Link
          
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Read more about me</Link></Button>
 }
      </HeroContainer>
      <ImageContainer data-aos="fade-left">
        <img src={heroimg} alt="hero" />
      </ImageContainer>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100%;
  @media screen and (max-width: 1140px) {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
    row-gap: 50px;
    padding-bottom: 50px;
  }
`;
const ImageContainer = styled.div`
  width: 40%;
  height: 100%;
  align-items: center;
  display: flex;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    ${"" /* align-self:flex-end; */}
    border-bottom-left-radius:40%;
    border-bottom-right-radius: 30%;
  }
  @media screen and (max-width: 1140px) {
    width: 100%;
    justify-content: center;

    img {
      width: 50%;
    }
  }
`;

const HeroContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${"" /* letter-spacing:5px; */}
  .greeting {
    font-size: 20px;
    color: #00ffff;
  }
  .title {
    font-size: 60px;
    color:#ccd6f6;
    font-weight: bolder;
  }
  .profession {
    font-size: 40px;
    margin-bottom: 10px;
    display: flex;
    color:#ccd6f6;

    span {
      color: #00ffff;
      font-family: "Libre Baskerville", serif;
    }
  }
  .text {
    width: 80%;
    color:#d9e8ff;
    line-height: 1.5;
    font-size: 18px;
    ${'' /* text-align:justify; */}
  }

  @media screen and (max-width: 1140px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 730px) {
    .title {
      font-size: 40px;
    }
    .greeting,
    .text,
    button {
      font-size: 15px;
    }
    .profession {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
      font-size: 40px;
    }
    .greeting,
    .text,
    button {
      font-size: 15px;
    }
    .profession {
      font-size: 20px;
    }
  }
`;

const ButtonBox=styled.div`
display:flex;
column-gap:10px;
`

const Button = styled.button`
  font-size: 18px;
  padding: 15px 20px;
  
  align-self: flex-start;
  margin-top: 30px;
  background: none;
  border: 1px solid #00ffff;
border-radius:10px;
a{
  color: #00ffff;
  text-decoration:none; 
  font-weight:bold;
  letter-spacing:2px;
}
  &:hover{
	background:#00ffff;
	a{
    color:black;
  }
  }

  @media screen and (max-width: 1140px) {
    align-self: center;
  }
`;


