import { styled } from "styled-components";

// project styles
const S = {};

S.Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

S.ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 2rem;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  box-sizing: border-box;
  transition: margin 0.5s ease, gap 0.5s ease;

  // 세로 정렬로 전환 (화면 좁아질떄)
  // switch to column layout
  @media (max-width: 1700px) {
    margin-top: 200px;
    margin-bottom: 150px;
    flex-direction: column;
    align-items: center;
  }
`;
S.ProjectItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1; 
  overflow: hidden;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 600px) {
    max-width: 95%;
  }
`;


S.ProjectBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  transition: opacity 0.4s ease;
`;

// Projects.jsx styles for each boxes

S.Thumbnail = styled.img`
  width: 200px;
  margin-bottom: 40px;
  object-fit: cover;
  transition: transform 0.5s ease, opacity 0.3s ease;
`;

// Name of the project
S.ProjectTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #333;
  text-align: center;
  margin-top: 30px;
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
`;

S.DetailOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  overflow-y: auto;
  
  ${S.ProjectItem}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

S.DetailContainer = styled.div`
  width: 100%;
`;

S.ProjectContent = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 15px;
`;


S.SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Breif details of each projects
S.ProjectDetails = styled.div`
  color: #666;
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 20px;
  
  & ul {
    padding-left: 20px;
    margin: 10px 0;
  }
  
  & span {
    margin: 8px 0;
    line-height: 1.5;
  }
  
  & li {
    margin-bottom: 5px;
  }
  
  strong {
    color: #444;
  }
`;

export default S;