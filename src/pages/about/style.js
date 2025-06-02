import { styled, keyframes } from 'styled-components';

const S = {};

const slideAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-20%); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

S.SliderContainer = styled.div`
  position: relative;
  width: 100vw; 
  left: 50%;  
  right: 50%; 
  margin-left: -50vw; 
  overflow: hidden;
  background-color: #ffffff;
`;

S.LogoTrack = styled.div`
  display: inline-flex;
  animation: ${slideAnimation} 15s linear infinite;
  width: max-content;
`;

S.LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

S.Logo = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
  border-radius: 50px;
  width: 100px;
  padding: 10px;
`;

// stacks
S.GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    to right, 
    #ffffff 0%, 
    rgba(255,255,255,0) 10%, 
    rgba(255,255,255,0) 90%, 
    #ffffff 100%
  );
`;

S.body = styled.div`
  font-size: 18px;
  scroll-behavior: smooth;
`;

S.MainContainer = styled.div`
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: 10px;
  margin-bottom: 20px;
`;

S.IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  flex: 1 0 auto;
  position: relative;
  z-index: -1;
  height: 100vh;
  justify-content: center;
  align-items: start;
  transform: translateZ(-1px) scale(2);
  background-color: #000000;

  & h2 {
    color: #ffffff;
    font-size: clamp(20px, 6vw, 60px);
    font-weight: 600;
    line-height: 70px;
  }

  & span {
    text-align: center;
    color: #ffffff;
    font-weight: 100;
    font-size: clamp(40px, 8vw, 40px);
  }

  & h1 {
    color: #ffffff;
    text-align: center;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 800;
    line-height: 70px;
  }
`;

S.ContentContainer = styled.section`
  position: relative;
  display: block;
  background-color: #fff;
  z-index: 1;
`;

S.BentoGrid = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px 20px;
  background-color: #fff;
  max-width: 1300px;
  margin: 0 auto;
`;


S.BentoCard = styled.div`
  background-color: #e9e9e9;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  padding: 30px;
  animation: ${fadeInUp} 0.8s ease forwards;
  opacity: 0;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #222;
    text-align: left;
  }

  p, li {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
  }

  ul {
    padding-left: 20px;
  }
`;


S.ProfileSection = styled.div`
  gap: 40px;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 60px;
  background-color: #fff;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

S.ProfileIntro = styled.div`
  flex: 1;
  min-width: 300px;

  h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #222;
  }

  p {
    font-size: 16px;
    color: #333;
    line-height: 1.7;
  }
`;

S.ProfileImage = styled.img`
  border-radius: 20px;
  width: 300px;
  max-width: 100%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

S.TagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

S.Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  font-size: 14px;
  padding: 8px 14px;
  border-radius: 20px;
  font-weight: 500;
`;


S.Section = styled.section`
  animation: ${fadeInUp} 1s ease forwards;
  opacity: 0;
`;

S.SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-left: 12px;
  color: #222;
`;

S.Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 16px;
`;

S.List = styled.ul`
  padding-left: 20px;
  margin-top: 12px;
`;

S.ListItem = styled.li`
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 12px;
  color: #333;
`;

S.Highlight = styled.strong`
  color: #000;
  font-weight: 700;
`;

S.ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

S.ResumeButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #000; 
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #919191;
    transform: translateY(-2px);
  }
  &:active {
    background-color: #919191;
    transform: translateY(0);
  }
`;

S.Certificates = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px 0;
`;

S.CertificateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 250px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }
`;


export default S
