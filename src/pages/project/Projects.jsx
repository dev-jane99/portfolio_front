import React from "react";
import S from "./style";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <S.ProjectContainer>
      <S.ProjectItem>
        <S.ProjectBackground>
          <S.Thumbnail src="/assets/powpow/powpow_logo.svg" alt="POWPOW logo" />
          <S.ProjectTitle>POWPOW : Petsonality testing & shop</S.ProjectTitle>
        </S.ProjectBackground>
        <S.DetailOverlay>
          <S.DetailContainer>
            <S.ProjectContent>POWPOW : online shopping site</S.ProjectContent>
            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <span><strong>Product Manager*</strong><br />
              Project Planning & Strategy / Design & UX Architecture / Development / Team Management & Coordination / Deployment
              <br /><strong>Part in charge:</strong><br />Admin page & Shop page & Product detail page
              </span>
            </S.ProjectDetails>
            <S.ProjectDetails>
              <S.SectionTitle>Tech Stack</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> React, Context API</li>
                <li><strong>Backend:</strong> Spring Boot, JWT, MySQL</li>
                <li><strong>Tools:</strong> Swagger, Postman, AWS</li>
              </ul>
            </S.ProjectDetails>
            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <ul><li>Team of 7 members, 3 months duration</li></ul>
            </S.ProjectDetails>
            <Link to={"powpow"}>For more</Link>
          </S.DetailContainer>
        </S.DetailOverlay>
      </S.ProjectItem>
      
      <S.ProjectItem>
        <S.ProjectBackground>
          <S.Thumbnail src="/assets/cooing/cooinglogo.svg" alt="COOING logo" />
          <S.ProjectTitle>COOING : workshop reservation & shop</S.ProjectTitle>
        </S.ProjectBackground>
        
        <S.DetailOverlay>
          <S.DetailContainer>
            <S.ProjectContent>COOING : workshop reservation & shop</S.ProjectContent>
            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <span>Full Project Planning & Strategy / Design & UX Architecture / Development / Deployment</span>
            </S.ProjectDetails>
            <S.ProjectDetails>
              <S.SectionTitle>Tech Stack</S.SectionTitle>
                <ul>
                  <li><strong>Frontend:</strong> React, React Router, Axios, Day.js, Styled Components, Testing Library</li>
                  <li><strong>Backend:</strong> Spring Boot, JWT, MySQL, Axios</li>
                  <li><strong>Tools:</strong> React Scripts, Web Vitals</li>
                </ul>
            </S.ProjectDetails>
            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <ul><li>Personal Project, 3 months duration</li></ul>
            </S.ProjectDetails>
            <Link to={"cooing"}>For more</Link>
          </S.DetailContainer>
        </S.DetailOverlay>
      </S.ProjectItem>
      
      <S.ProjectItem>
        <S.ProjectBackground>
          <S.Thumbnail src="/assets/logo.svg" alt="Project logo" />
          <S.ProjectTitle>JANE : Web-Portfolio</S.ProjectTitle>
        </S.ProjectBackground>
        
        <S.DetailOverlay>
          <S.DetailContainer>
            <S.ProjectContent>JANE : Portfolio website</S.ProjectContent>
            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <span>Full Project Planning / Design / Development / Deployment</span>
            </S.ProjectDetails>
            <S.ProjectDetails>
              <S.SectionTitle>Tech Stack</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> React, Context API</li>
                <li><strong>Backend:</strong> Spring Boot, MySQL</li>
                <li><strong>Tools:</strong> Swagger</li>
              </ul>
            </S.ProjectDetails>
            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <ul><li>Personal Project, 3 months duration</li></ul>
            </S.ProjectDetails>
            <Link to={"portfolio2025"}>For more</Link>
          </S.DetailContainer>
        </S.DetailOverlay>
      </S.ProjectItem>
    </S.ProjectContainer>
  );
};

export default Projects;