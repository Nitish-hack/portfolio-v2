import React ,{useEffect} from 'react'
import styled from "styled-components"
import OtherProjectsData from '../Database/OtherProjectsData'
import AOS from "aos";
import "aos/dist/aos.css";
const OtherProjects = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <Wrapper data-aos="fade-up">
    <h1>Some other noteworthy projects</h1>
   <Container>
    {OtherProjectsData.map((item,index)=>{
        return  <ImageContainer key={index}  data-aos="flip-right">
            <img src={item.thumbnail} alt="project_image" />
            <div class="image__overlay image__overlay--primary">
			<h3>{item.title}</h3>
			<p>	{item.description}</p>
            <div className='links'>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <a href={item.website} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
            </div>
		</div> 
           </ImageContainer>
       
    })}
   </Container>
   </Wrapper>
  )
}


export default OtherProjects;

const Container =styled.div`
display:flex;
width:100%;
flex-wrap:wrap;
row-gap:20px;
column-gap:2%;

`
const Wrapper =styled.div`
padding:50px 0;
padding-bottom:100px;
 h1 {
    padding-bottom: 20px;
    color:#ccd6f6;
  }
`
const ImageContainer =styled.div`
width:32%;
position: relative;
cursor:pointer;
p{
    font-size:17px;
    @media screen and (max-width:1500px) {
        font-size:12px;
    }
    @media screen and (max-width:1000px) {
        font-size:12px;
    }
}
@media screen and (max-width:900px){
    width:48%;
}
@media screen and (max-width:500px){
    width:100%;
}
img{
    display: block;
	width: 100%;
    border-radius:10px;
}
.image__overlay {
	position: absolute;
	top: 0;
    border-radius:10px;
	left: 0;
	width: 100%;
	height: 100%;
	background: aliceblue;
	color: black;
    font-weight:bold;
	padding:0 10px;
    text-align:center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: opacity 0.25s;


    .links{
    display:flex;
    column-gap:10px;
    margin-top:10px;
    
    a{
      text-decoration:none;
      color:white;
      background:#112240;
    padding:2px 10px ;
    border-radius:15px;
    border:1px solid #00ffff;
    letter-spacing:2px;
    font-size:17px;
    @media screen and (max-width:1500px) {
        font-size:12px;
    }
    }
  }
}

.image__overlay--primary {
    background: rgb(0,255,255);
background: linear-gradient(155deg, rgba(0,255,255,1) 21%, rgba(17,34,64,1) 85%);
    opacity:0;
}

.image__overlay>* {
	transform: translateY(20px);
	transition: transform 0.25s;
}

.image__overlay:hover {
	opacity: 1;
}

.image__overlay:hover>* {
	transform: translateY(0);
}

.image__title {
	font-size: 2em;
	font-weight: bold;
}

.image__description {
	font-size: 1.25em;
	margin-top: 0.25em;
}

`