import React, { useState ,useEffect} from 'react'
import styled from "styled-components";
import {AiOutlineMail} from "react-icons/ai"
import {IoMdClose} from "react-icons/io"
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    const [clicked,setClick]=useState(false);
    const handleClick = () => {
        setClick(!clicked); 
    
      };
      useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
    {!clicked && 
   <FooterContainer id="contact" data-aos="fade-up">
    <div className="title">Get In Touch</div>
    <div className="description">I enjoy connecting with individuals and am always open to new opportunities, collaborations, or simply engaging in a friendly conversation. Feel free to reach out to me with just a click of a button. I look forward to hearing from you!</div>
    <Button onClick={handleClick} >Say Hi!</Button>
    <p>Made by <a href="https://www.linkedin.com/in/nitish9999/" rel="noreferrer" target="_blank" >Nitish Kumar Jha</a></p>
   </FooterContainer>
   }
  {clicked && <ContactContainer data-aos="fade-up">
  <form action="https://formspree.io/f/xgebgpeg" method='POST'>
   <div className="heading">
    <div className='contactme' ><AiOutlineMail /> Contact Me</div>
    <IoMdClose className='closebtn' onClick={handleClick}/>
   </div>
   <div className='desc'>Hello, Whats your email address?</div>
   <input type="email" name="username" className="field" required/>
   <div className='desc'>Please leave a message below?</div>
   <textarea name="message" className='field' />
   <SendButton  type='submit' value="send">Send</SendButton>
   </form>
   </ContactContainer> }
   </>
  )
}

export default Footer;
 
const ContactContainer=styled.div`
padding:50px 10%;
background:#112240;

border-top-left-radius:50px;
border-top-right-radius:50px;
font-family:"Poppins";
min-height:60vh;

.heading{
    display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
  .closebtn{
    color:#00ffff;
    font-size:40px;
    cursor:pointer;
  }
  .contactme{
    display:flex;
  font-size: 40px;
  column-gap:10px;
    font-weight: bolder;
    align-items:center;
    color:#d9e8ff;
    svg{
        color:#00ffff;
    }

    @media screen and (max-width:500px){
      font-size:30px;
    }
  }


}
.desc{
font-size:18px;
color:#d9e8ff;
margin-bottom:10px;
    @media screen and (max-width:1000px) {
        font-size:15px;
    }
}
.field{
    border:2px solid  #00ffff;
    padding:10px;
    background:inherit;
    border-radius:10px;
    margin-bottom:20px;
    font-size:17px;
    color:white;

    @media screen and (max-width:1000px){
        font-size:15px;
    }

}

textarea{
    width:100%;
}
`
const FooterContainer=styled.div` 
text-align:center;
padding:50px 10%;
background:#112240;
border-top-left-radius:50px;
border-top-right-radius:50px;
font-family:"Poppins";
min-height:60vh;
.title{
    font-size: 60px;
    color:#ccd6f6; 
    font-weight: bolder;
    margin:20px 0;
    margin-bottom:10px;
}
.description{
    font-size:17px;
    color:#d9e8ff;
    @media screen and (max-width:1000px) {
        font-size:15px;
    }
}
p{
  color:#d9e8ff;
}
a{
    text-decoration:none;
    color:red;
}

@media screen and (max-width: 730px) {
    .title {
      font-size: 40px;
    }
}
`

const Button = styled.button`
  font-size: 20px;
  padding: 15px 20px;
  align-self: flex-start;
  margin: 30px 0;

  background: none;
  color: #00ffff;
  border: 1px solid #00ffff;
  border-radius:10px;
  transition:0.6s ease-in-out;
  &:hover {
   background:#00ffff;
   color:black;
    ${'' /* transform: scale(1.1); */}
   
  }

`;

const SendButton=styled.button`
    color:white;
    background:#0a192f;
  padding:10px 20px;
  border-radius:10px;
  border:1px solid #00ffff;
  letter-spacing:2px;
  font-size:18px;
  color:#d9e8ff;
  font-weight:bold;
`