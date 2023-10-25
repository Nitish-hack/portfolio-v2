import React,{useEffect} from 'react'
import styled from "styled-components"
import aboutgif from "../assets/images/about.gif"
import {SiMui,SiCanva,SiReact,SiMongodb,SiJavascript,SiNodedotjs} from "react-icons/si"
import {TbBrandMysql} from "react-icons/tb"
import {FaTerminal,FaSass} from "react-icons/fa"
import {TbApi, TbBrandNextjs,TbBrandTailwind} from "react-icons/tb"
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="about" data-aos="fade-up">
  <h1>About me </h1> 
  <AboutContainer>
    <AboutText>
    Hi, I'm Nitish Kumar Jha, a passionate and dedicated Full Stack Web Developer with a strong foundation in front-end and back-end technologies. My journey in web development began during my <span> Bachelor's in Technology (IT) at Guru Gobind Singh Indraprastha University</span>. Since then, I have been exploring and honing my skills to create impactful and user-friendly web applications.
    <br></br>
    I thrive on writing clean and efficient code, and I'm constantly learning and keeping up with the latest industry trends. With a keen eye for design and attention to detail, I strive to deliver high-quality solutions that provide a seamless user experience. I enjoy tackling complex problems and have developed strong problem-solving skills that enable me to overcome challenges and find innovative solutions.
    <br />
    <br />

    Here are some of the technologies that I love to work with:
    <br></br>
    <br></br>
    <SkillsContainer>
      <div className="skillcol">
        <div className="skill"><SiReact /> ReactJS</div>
        <div className="skill"><TbBrandNextjs />NextJS</div>
        <div className="skill"><TbBrandTailwind/>Tailwind CSS</div>
        <div className="skill"><FaSass/>Sass</div>
      </div>
      <div className="skillcol">
        <div className="skill"><SiMongodb />mongoDB</div>
        <div className="skill"><SiNodedotjs/>Node.js</div>
        <div className="skill"><TbBrandMysql/>MySQL</div>
        <div className="skill"><SiJavascript/>Javascript</div>

      </div>
      <div className="skillcol">

        <div className="skill"><FaTerminal />C++</div>
        <div className="skill"><TbApi />Rest API</div>
        <div className="skill"><SiCanva />Canva</div>
        <div className="skill"><SiMui />MUI</div>
      </div>
    </SkillsContainer>

    </AboutText>
    <GifContainer>
   <img src={aboutgif} alt="aboutme" />   
    </GifContainer>
  </AboutContainer>
  </Wrapper>
 
  )
}

export default About;

const Wrapper =styled.div`
 padding-top:100px;
 h1{
  margin-bottom:20px;
  color:#ccd6f6;
 }
padding-bottom:50px;
@media screen and (max-width:1000px){
text-align:center;
}
`

const AboutContainer=styled.div`
  display:flex;
  @media screen and (max-width:1000px){
  flex-direction:column-reverse;
 
}

` 
const AboutText=styled.div`
font-size:17px;
color: #d7d7d7;
width:60%;
text-align:justify;
span{
    color:red;
}
@media screen and (max-width:1000px){
  font-size:15px;
  width:100%;
}
`
const GifContainer=styled.div`
width:40%;

img{
max-width:80%;
max-height:100%;
margin-top:-5%;
object-fit: contain;
}

@media screen and (max-width:1000px){
  width:100%;
  display:flex;
  justify-content:center;
  img{
   max-width:50%;
  
  }
}
`
const SkillsContainer=styled.div`
 
display:flex;
justify-content:space-between;

.skill{
  display:flex;
  align-items:center;
  column-gap:10px;
   
  @media screen and (max-width:450px){
    column-gap:8px;
    font-size:13px;
  }
}
`