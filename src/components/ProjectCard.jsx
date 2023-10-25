import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import {BiLinkExternal} from "react-icons/bi";
import "aos/dist/aos.css";
import Slider from "./Slider";
const ProjectCard = ({ title, description, index,images, tech, github, website }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const isOddKey = index % 2 === 1;

  return (
    <CardContainer data-aos="zoom-in"  isOdd={isOddKey}>
     
 
      <ImageContainer> 

     <Slider images={images} />
     
 
      </ImageContainer>
      <ContentContainer  isOdd={isOddKey}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="stack">
          {tech.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            Visit Site <BiLinkExternal />
          </a>
        </div>
      </ContentContainer>
    </CardContainer>
  );
};

export default ProjectCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${({ isOdd }) => (isOdd ? "row-reverse" : "row")};
  @media screen and (max-width: 800px) {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    flex-direction: column;
    background: #112240;
    border-radius: 20px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  padding-left: ${({ isOdd }) => (isOdd ? "0" : "20px")};
  padding-right: ${({ isOdd }) => (isOdd ? "20px" : "0")};
  flex-direction: column;
  text-align: ${({ isOdd }) => (isOdd ? "left" : "right")};
  width: 50%;
  row-gap: 15px;
  .title {
    font-size: 20px;
    letter-spacing: 2px;
    font-family: "Libre Baskerville", serif;
    color: #d9e8ff;
    @media screen and (max-width: 1000px) {
      font-size: 17px;
    }
  }


  .description {
    padding:10px;
    background:#112240;
    
  color: #d7d7d7;
    font-size: 17px;
    font-family: "Poppins", sans-serif;
 
    @media screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ isOdd }) => (isOdd ? "flex-start" : "flex-end")};
    column-gap: 10px;
    row-gap: 5px;

  p{
    background:#112240;
    padding:5px 10px ;
    border-radius:10px;
    white-space:nowrap;
    color: #d7d7d7;

  }
  }

  .links{
    display:flex;
    column-gap:10px;
    justify-content: ${({ isOdd }) => (isOdd ? "flex-start" : "flex-end")};
    a{
      text-decoration:none;
      color:white;
      background:#112240;
    padding:2px 10px ;
    border-radius:15px;
    border:1px solid #00ffff;
    font-size:15px;

    svg{
      margin-bottom:-2px;
    }
    }
  }

  @media screen and (max-width:800px){
 width:100%;
 text-align:left;
padding:10px 0;
.description{
  padding:0;
}
padding-left:20px;

.stack, .links{
justify-content:flex-start;
}
.links{
  margin-left:4px;
}
.stack p{
  background:#0a192f;

}

}
`;
const ImageContainer = styled.div`
width:50%;
img{
  width:100%;
  height:100%;
}

@media screen and (max-width:800px){
 width:100%;

 img {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      height: auto;
    }

  .thumbs {
    img{
      border-radius:0;
    }
  }
}

`;
