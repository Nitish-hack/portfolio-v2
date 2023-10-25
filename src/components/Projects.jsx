import React, { useState,useEffect } from "react";
import styled from "styled-components";
import ProjectsData from "../Database/ProjectsData";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Number of initially visible projects

  const handleShowMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 2); // Increase the count to show 2 more projects
  };
  const handleShowless = () => {
    setVisibleProjects(3); // Increase the count to show 2 more projects
  };

  const projectsToShow = ProjectsData.slice(0, visibleProjects);
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <Wrapper id="work" data-aos="fade-up">
      <h1>Projects</h1>
      <ProjectContainer>
  
        {projectsToShow.map((item, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            images={item.images}
            tech={item.tech}
            github={item.github}
            website={item.website}
          />
        ))}

      </ProjectContainer>
      {visibleProjects < ProjectsData.length && (
        <Button onClick={handleShowMoreProjects}>Show More Projects</Button>
      )}
      {visibleProjects === ProjectsData.length && (
        <Button onClick={handleShowless}>Show Less</Button>
      )}
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  /* align-items:center; */

  h1 {
    padding-bottom: 20px;
    color:#ccd6f6;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 100px;
`;

const Button = styled.button`
  font-size: 17px;
  padding: 15px 20px;
  align-self: flex-start;
  margin: 40px 0;
 margin-top:50px; 
  background: none;
  color: #00ffff;
  border: 1px solid #00ffff;
  &:hover {
    box-shadow: 0px 0px 40px 0px rgba(0, 255, 255, 1);
    transform: scale(1.1);
    margin-left: 10px;
  }
  align-self: center;
  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }
}
`;