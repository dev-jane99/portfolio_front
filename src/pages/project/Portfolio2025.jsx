import React, { useState, useEffect, useCallback } from 'react'
import S from './style';

const Portfolio2025 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const PUBLIC_URL = process.env.PUBLIC_URL || '';

  const slides = [
    {
      src: process.env.PUBLIC_URL + "../assets/slide1.png",
      alt: "Project Overview"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/slide2.png", 
      alt: "Key Features"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/slide3.png",
      alt: "Project Overview"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/slide4.png",
      alt: "Project Overview"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/slide5.png", 
      alt: "Key Features"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/slide6.png",
      alt: "Project Overview"
    }
  ];

  const openModal = (index) => {
    setCurrentSlideIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const nextSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      }
      if (e.key === 'ArrowLeft') {
        prevSlide();
      }
      if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, closeModal, nextSlide, prevSlide]);

  return (
    <S.PowpowContainer>
      <S.Header>
        <S.Logo 
          src={process.env.PUBLIC_URL + "../assets/logo_white.svg"} 
          alt="jane logo"
        />
      </S.Header>
    
      <S.ProjectInfo>
        <S.Brief>Web-Portfolio</S.Brief>
        
        <S.MainDescription>
            An application built using React to showcase professional resume, detailed project case studies, and technical skills through a clean, modern, and fully responsive user interface.
        </S.MainDescription>
    
        <S.ProjectDetailsGrid>
          <S.DetailCard>
            <S.DetailLabel>Duration</S.DetailLabel>
            <S.DetailValue>2025.07 - 2025.11</S.DetailValue>
            <S.DetailSubtext>5 months • Personal Project</S.DetailSubtext>
          </S.DetailCard>
          
          <S.DetailCard>
            <S.DetailLabel>Tech Stack</S.DetailLabel>
            <S.TechStackContainer>
              <S.TechBadge>Git</S.TechBadge>
              <S.TechBadge>React</S.TechBadge>
              <S.TechBadge>HTML5</S.TechBadge>
              <S.TechBadge>CSS3</S.TechBadge>
              <S.TechBadge>JavaScript</S.TechBadge>
              <S.TechBadge>Styled Components</S.TechBadge>
              <S.TechBadge>Figma</S.TechBadge>
              <S.TechBadge>Responsive Design</S.TechBadge>
            </S.TechStackContainer>
          </S.DetailCard>
          
          <S.DetailCard>
            <S.DetailLabel>My Role</S.DetailLabel>
            <S.RoleContainer>
              <S.RoleTitle>Frontend Developer / Portfolio Creator</S.RoleTitle>
              <S.RoleList>
                <S.RoleBullet>• Full UI/UX design and wireframing for optimal presentation</S.RoleBullet>
                <S.RoleBullet>• Component-based development using React for modularity</S.RoleBullet>
                <S.RoleBullet>• Implemented responsive design across all major breakpoints</S.RoleBullet>
              </S.RoleList>
            </S.RoleContainer>
          </S.DetailCard>
        </S.ProjectDetailsGrid>
      </S.ProjectInfo>
      
      <S.FeatureSection>
        <S.FeatureTitle>Key Portfolio Sections</S.FeatureTitle>
        <S.FeatureGrid>
          <S.FeatureCard>
            <S.FeatureIcon><i className="fi fi-br-document"></i></S.FeatureIcon>
            <S.FeatureCardTitle>Resume / CV Display</S.FeatureCardTitle>
            <S.FeatureCardDesc>Dynamic, easily-digestible display of education, experience, and technical skills.</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon><i className="fi fi-br-briefcase"></i></S.FeatureIcon>
            <S.FeatureCardTitle>Project Showcase</S.FeatureCardTitle>
            <S.FeatureCardDesc>Categorized view of development projects with detailed case studies.</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>          
              <img 
                src={`${PUBLIC_URL}/assets/certificate.svg`} 
                alt="Showcase Icon" 
                style={{ width: '50px', height: '50px'}}/>
            </S.FeatureIcon>
            <S.FeatureCardTitle>About Me & Skills</S.FeatureCardTitle>
            <S.FeatureCardDesc>Visual representation of core competencies and professional background summary.</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon><i className="fi fi-br-link-alt"></i></S.FeatureIcon>
            <S.FeatureCardTitle>Contact & Links</S.FeatureCardTitle>
            <S.FeatureCardDesc>Centralized hub for GitHub, LinkedIn, and direct communication methods.</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon><i className="fi fi-br-apps"></i></S.FeatureIcon>
            <S.FeatureCardTitle>Interactive UI Elements</S.FeatureCardTitle>
            <S.FeatureCardDesc>Custom loading states, animations, and transitions to enhance user engagement.</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon><i className="fi fi-br-mobile"></i></S.FeatureIcon>
            <S.FeatureCardTitle>Cross-Device Responsiveness</S.FeatureCardTitle>
            <S.FeatureCardDesc>Pixel-perfect layout optimization for mobile, tablet, and desktop viewing.</S.FeatureCardDesc>
          </S.FeatureCard>
        </S.FeatureGrid>
      </S.FeatureSection>
      
      <S.SlidesSection>
        <S.SlidesTitle>Project Overview</S.SlidesTitle>
        <S.SlidesGrid>
          {slides.map((slide, index) => (
            <S.SlideContainer key={index} onClick={() => openModal(index)}>
              <S.Slide 
                src={slide.src} 
                alt={slide.alt} 
              />
              <S.SlideOverlay>
                <S.ZoomIcon>Click for a better view</S.ZoomIcon>
              </S.SlideOverlay>
            </S.SlideContainer>
          ))}
        </S.SlidesGrid>
      </S.SlidesSection>

      {/* slide modal */}
      {isModalOpen && (
        <S.Modal onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={closeModal}>✕</S.CloseButton>
            
            {slides.length > 1 && (
              <>
                <S.PrevButton onClick={prevSlide}>‹</S.PrevButton>
                <S.NextButton onClick={nextSlide}>›</S.NextButton>
              </>
            )}
            
            <S.ModalSlide 
              src={slides[currentSlideIndex].src} 
              alt={slides[currentSlideIndex].alt} 
            />
            
            {slides.length > 1 && (
              <S.SlideCounter>
                {currentSlideIndex + 1} / {slides.length}
              </S.SlideCounter>
            )}
          </S.ModalContent>
        </S.Modal>
      )}
    </S.PowpowContainer>
  )
}
export default Portfolio2025
