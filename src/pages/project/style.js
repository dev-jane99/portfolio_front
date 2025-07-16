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

// POWPOW

S.PowpowContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 40px;
  // background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #ffffff;
  
  @media (max-width: 1200px) {
    padding: 250px 20px;
  }
`;

S.Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
`;

S.Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 20px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
`;

S.Logo = styled.img`
  width: 250px;
  height: auto;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 200px;
  }
`;

S.ProjectInfo = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

S.Brief = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

S.Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

S.FeatureSection = styled.div`
  margin-bottom: 50px;
`;

S.FeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

S.FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

S.FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
`;

S.FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

S.FeatureCardTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #ffffff;
`;

S.FeatureCardDesc = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

S.SlidesSection = styled.div`
  margin-top: 50px;
`;

S.SlidesTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

S.SlidesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

S.SlideContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
`;

S.Slide = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;



export default S;