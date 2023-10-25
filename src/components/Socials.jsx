import React from 'react'
import { styled } from 'styled-components';
import {FiMail,
FiLinkedin,
FiGithub,
FiInstagram } from "react-icons/fi"
const Socials = () => {
  return (
    <SocialsContainer>
    <a href="https://www.linkedin.com/in/nitish9999/" target='_blank' rel="noreferrer"  className="social"><FiLinkedin /></a>
    <a href="https://github.com/Nitish-hack" className="social" target='_blank' rel="noreferrer"><FiGithub /></a>
    <a href="https://www.instagram.com/__nitish.jha/" className="social" target='_blank' rel="noreferrer"><FiInstagram /></a>
    <a href="mailto:nitishjha913@gmail.com" className="social" target='_blank' rel="noreferrer"><FiMail /></a>
    </SocialsContainer>
  )
}

export default Socials;

const SocialsContainer=styled.div`
display:flex;
column-gap:10px;
margin-top:20px;
a{
    text-decoration:none;
    background:#112240;
    border-radius:50%;
    color:white;
    width:45px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:22px;
    :hover{
        color: #00ffff;
        transform:scale(1.1);
    }

}
`