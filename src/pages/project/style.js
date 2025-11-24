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

// S.Header = styled.div`
//   text-align: center;
//   margin-bottom: 60px;
//   padding-bottom: 40px;
//   border-bottom: 2px solid rgba(255, 255, 255, 0.2);
// `;

// S.Title = styled.h1`
//   font-size: 3.5rem;
//   font-weight: 700;
//   letter-spacing: 3px;
//   margin-bottom: 20px;
//   text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//     letter-spacing: 2px;
//   }
// `;

// S.Logo = styled.img`
//   width: 250px;
//   height: auto;
//   filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: scale(1.05);
//   }
  
//   @media (max-width: 768px) {
//     width: 200px;
//   }
// `;

// S.ProjectInfo = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   border-radius: 20px;
//   padding: 40px;
//   margin-bottom: 50px;
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
//   @media (max-width: 768px) {
//     padding: 30px 20px;
//   }
// `;

// S.Brief = styled.h2`
//   font-size: 1.8rem;
//   font-weight: 600;
//   margin-bottom: 20px;
//   color: #ffffff;
//   text-align: center;
  
//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }
// `;

// S.Description = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.8;
//   margin-bottom: 15px;
//   color: rgba(255, 255, 255, 0.9);
//   text-align: center;
  
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// S.FeatureSection = styled.div`
//   margin-bottom: 50px;
// `;

// S.FeatureTitle = styled.h3`
//   font-size: 2rem;
//   font-weight: 600;
//   text-align: center;
//   margin-bottom: 40px;
//   color: #ffffff;
  
//   @media (max-width: 768px) {
//     font-size: 1.6rem;
//   }
// `;

// S.FeatureGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 25px;
  
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     gap: 20px;
//   }
// `;

// S.FeatureCard = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   border-radius: 15px;
//   padding: 25px;
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
//   }
// `;

// S.FeatureIcon = styled.div`
//   font-size: 2.5rem;
//   margin-bottom: 15px;
// `;

// S.FeatureCardTitle = styled.h4`
//   font-size: 1.3rem;
//   font-weight: 600;
//   margin-bottom: 10px;
//   color: #ffffff;
// `;

// S.FeatureCardDesc = styled.p`
//   font-size: 0.95rem;
//   color: rgba(255, 255, 255, 0.8);
//   line-height: 1.5;
// `;

// S.SlidesSection = styled.div`
//   margin-top: 50px;
// `;

// S.SlidesTitle = styled.h3`
//   font-size: 2rem;
//   font-weight: 600;
//   text-align: center;
//   margin-bottom: 40px;
//   color: #ffffff;
  
//   @media (max-width: 768px) {
//     font-size: 1.6rem;
//   }
// `;

// S.SlidesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
//   gap: 30px;
  
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     gap: 20px;
//   }
// `;

// S.SlideContainer = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   border-radius: 15px;
//   padding: 20px;
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
//   }
// `;

// S.Slide = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: scale(1.02);
//   }
// `;

// S.PowpowContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 60px 40px;
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   min-height: 100vh;
//   color: #ffffff;
  
//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

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

// S.ProjectInfo = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   border-radius: 20px;
//   padding: 40px;
//   margin-bottom: 50px;
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
//   @media (max-width: 768px) {
//     padding: 30px 20px;
//   }
// `;

// S.Brief = styled.h2`
//   font-size: 1.8rem;
//   font-weight: 600;
//   margin-bottom: 20px;
//   color: #ffffff;
//   text-align: center;
  
//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }
// `;

// S.Description = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.8;
//   margin-bottom: 15px;
//   color: rgba(255, 255, 255, 0.9);
//   text-align: center;
  
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

S.ProjectInfo = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

S.Brief = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #ffffff;
  text-align: center;
  // background: linear-gradient(135deg, #cab3a0 0%, #eeede4 100%);
  // background: linear-gradient(135deg, #cab3a0 0%, #bad5d4 100%);
  background: linear-gradient(135deg, #7ab2d4 0%, #eaabbc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

S.MainDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 255);
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
`;

S.FeatureTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

S.FeatureTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

S.ProjectDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

S.DetailCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
  }
`;

S.DetailLabel = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

S.DetailValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
`;

S.DetailSubtext = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

S.TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

S.TechBadge = styled.span`
  // background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background: linear-gradient(135deg, #7ab2d4 0%, #eaabbc 100%);
  color: black;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
`;

S.RoleContainer = styled.div`
  /* 컨테이너 스타일 */
`;

S.RoleTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
`;

S.RoleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

S.RoleBullet = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
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
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
`;

S.SlideOverlay = styled.div`
  position: absolute;
  top: 16px;
  left: 10px;
  right: 10px;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px;
  pointer-events: none;
  
  ${S.SlideContainer}:hover & {
    opacity: 1;
  }
`;

S.ZoomIcon = styled.div`
  font-size: 2rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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

S.Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

S.ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.ModalSlide = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

S.CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

S.PrevButton = styled.button`
  position: absolute;
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 768px) {
    left: 10px;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

S.NextButton = styled.button`
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 768px) {
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

S.SlideCounter = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    bottom: -40px;
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;


export default S;