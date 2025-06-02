import React from "react";
import S from "./style";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <S.ProjectContainer>
      <S.ProjectItem>
        <S.ProjectBackground>
          <S.Thumbnail src="/assets/powpow/powpow_logo.svg" alt="POWPOW logo" />
          <S.ProjectTitle>POWPOW : Petsonality Testing & E-commerce</S.ProjectTitle>
        </S.ProjectBackground>
        <S.DetailOverlay>
          <S.DetailContainer>
            <S.ProjectContent>
              POWPOW : Pet-themed online shopping platform integrated with a personality-based recommendation system.
            </S.ProjectContent>
{/* 엑셀파일로 멤버들의 작업을 트레킹했던거 디테일 페이지에 추가하기 */}
            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <span>
                <strong>Product Manager</strong><br />
                Project Planning & Strategy / User Flow & UX Design / System Architecture / Development Coordination / Final Presentation<br />
                <strong>Tools Used:</strong> Figma (Design), GitHub (Collaboration)<br />
                <strong>Part in charge:</strong>Admin page, Shop page, Product detail page
              </span>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Tech Stack</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> React, Context API, React Router, Styled Components</li>
                <li><strong>Backend:</strong> Spring Boot, JWT, DBeaver (Oracle), Gradle</li>
                <li><strong>Tools:</strong> Swagger, Postman, GitHub, AWS, Figma, ERD</li>
              </ul>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <ul>
                <li>Team of 7 members, 3 months (Sep – Dec 2024)</li>
              </ul>
            </S.ProjectDetails>

            <Link to={"powpow"}>For more</Link>
          </S.DetailContainer>
        </S.DetailOverlay>
      </S.ProjectItem>

      
      <S.ProjectItem>
        <S.ProjectBackground>
          <S.Thumbnail src="/assets/cooing/cooinglogo.svg" alt="COOING logo" />
          <S.ProjectTitle>COOING : Workshop Reservation & E-commerce</S.ProjectTitle>
        </S.ProjectBackground>
        <S.DetailOverlay>
          <S.DetailContainer>
            <S.ProjectContent>
              COOING : Workshop reservation functionality with an e-commerce shopping experience.
            </S.ProjectContent>

            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <span>
                <strong>Full-Stack Developer (Personal Project)</strong><br />
                Planning / Architecture / Frontend & Backend Development / UI Implementation
                <br /><strong>Main Features:</strong><br />
                Reservation system, shopping cart, payment simulation, and admin management (Class announcememt / order)
              </span>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Tech Stack</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> React, React Router, Styled Components</li>
                <li><strong>Backend:</strong> Spring Boot, MySQL, Gradle</li>
                <li><strong>Tools:</strong> GitHub, Swagger</li>
              </ul>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <ul>
                <li>Personal Project, Ongoing (Apr 2025 – Present)</li>
              </ul>
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
                <li><strong>Tools:</strong> Swagger, GitHub, Figma, Tiptap Editor</li>

              </ul>
            </S.ProjectDetails>
            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <ul><li>Personal Project, 3 months duration</li></ul>
            </S.ProjectDetails>
            <S.ProjectDetails>
              <S.SectionTitle>Features</S.SectionTitle>
              <ul>
                <li>Auto-scrolling skill carousel</li>
                <li>Animated transitions using Framer Motion</li>
                <li>Responsive design across devices</li>
                <li>Project detail pages with routing</li>
                <li>Blog system with Tiptap-based rich text editor</li>
              </ul>
            </S.ProjectDetails>
            <Link to={"portfolio2025"}>For more</Link>
          </S.DetailContainer>
        </S.DetailOverlay>
      </S.ProjectItem>
    </S.ProjectContainer>
  );
};

export default Projects;