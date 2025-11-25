import React, { useState, useEffect, useCallback } from 'react'
import S from './style';

const Cooing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const PUBLIC_URL = process.env.PUBLIC_URL || '';
  
  const slides = [
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide1.png",
      alt: "Project Overview"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide2.png", 
      alt: "Key Features"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide3.png",
      alt: "Project Overview"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide4.png", 
      alt: "Key Features"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide5.png",
      alt: "Project Overview"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide6.png", 
      alt: "Key Features"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide7.png",
      alt: "Project Overview"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide8.png", 
      alt: "Key Features"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide9.png",
      alt: "Project Overview"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide10.png", 
      alt: "Key Features"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide11.png",
      alt: "Project Overview"
    },
    {
      src: process.env.PUBLIC_URL + "../assets/cooing/slide12.png", 
      alt: "Key Features"
    },
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

  // 키보드 이벤트 처리
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
          src={process.env.PUBLIC_URL + "../assets/cooing/cooinglogo_white.svg"} 
          alt="cooing logo"
        />
      </S.Header>
    
      <S.ProjectInfo>
        <S.Brief>Workshop Reservation & E-commerce</S.Brief>
        
        <S.MainDescription>
          A real-world commercial project commissioned by a workshop business owner. 
          Developed a production-ready platform handling complex reservation logistics, 
          payment processing, and inventory management while maintaining scalability 
          and user experience excellence.
        </S.MainDescription>
    
        <S.ProjectDetailsGrid>
          <S.DetailCard>
            <S.DetailLabel>Duration</S.DetailLabel>
            <S.DetailValue>2025.04 - 2025.07</S.DetailValue>
            <S.DetailSubtext>4 months • Personal Project</S.DetailSubtext>
          </S.DetailCard>
          
          <S.DetailCard>
            <S.DetailLabel>Tech Stack</S.DetailLabel>
            <S.TechStackContainer>
              <S.TechBadge>Git</S.TechBadge>
              <S.TechBadge>SpringBoot</S.TechBadge>
              <S.TechBadge>React</S.TechBadge>
              <S.TechBadge>Java</S.TechBadge>
              <S.TechBadge>Node.js</S.TechBadge>
              <S.TechBadge>mySQL</S.TechBadge>
              <S.TechBadge>html</S.TechBadge>
              <S.TechBadge>css</S.TechBadge>
              <S.TechBadge>JavaScript</S.TechBadge>
              <S.TechBadge>Styled Components</S.TechBadge>
              <S.TechBadge>Figma</S.TechBadge>
              <S.TechBadge>swagger</S.TechBadge>
            </S.TechStackContainer>
          </S.DetailCard>
          
          <S.DetailCard>
            <S.DetailLabel>My Role</S.DetailLabel>
            <S.RoleContainer>
              <S.RoleTitle>Full-Stack Developer & Digital Solution Consultant</S.RoleTitle>
              <S.RoleList>
                <S.RoleBullet>• Client Communication & Requirements Analysis</S.RoleBullet>
                <S.RoleBullet>• Translated business needs into technical specifications including future business expansion</S.RoleBullet>
                <S.RoleBullet>• Designed user-centric reservation flow based on real business operations</S.RoleBullet>
              </S.RoleList>
            </S.RoleContainer>
          </S.DetailCard>
        </S.ProjectDetailsGrid>
      </S.ProjectInfo>
      
<S.FeatureSection>
    <S.FeatureTitle>Key Features</S.FeatureTitle>
    <S.FeatureGrid>
      
      {/* 1. Showcase (제품 진열) */}
      <S.FeatureCard>
        <S.FeatureIcon>
          <img 
            src={`${PUBLIC_URL}/assets/cooing/showcase.svg`} 
            alt="Showcase Icon" 
            style={{ width: '50px', height: '50px'}}/>
        </S.FeatureIcon>
        <S.FeatureCardTitle>Product Showcase</S.FeatureCardTitle>
        <S.FeatureCardDesc>Interactive Product Showcase & Detail View</S.FeatureCardDesc>
      </S.FeatureCard>
      
      {/* 2. About (브랜드 소개) */}
      <S.FeatureCard>
        <S.FeatureIcon>
          <img 
            src={`${PUBLIC_URL}/assets/cooing/about.svg`} 
            alt="about Icon" 
            style={{ width: '50px', height: '50px'}}/>
        </S.FeatureIcon>
        <S.FeatureCardTitle>Brand Story</S.FeatureCardTitle>
        <S.FeatureCardDesc>Simple Brand Introduction & Vision Page</S.FeatureCardDesc>
      </S.FeatureCard>
      
      {/* 3. Class Appointment (클래스 예약) */}
      <S.FeatureCard>
        <S.FeatureIcon>
          <img 
            src={`${PUBLIC_URL}/assets/cooing/calendar.svg`} 
            alt="calendar Icon" 
            style={{ width: '50px', height: '50px'}}/>
        </S.FeatureIcon>
        <S.FeatureCardTitle>Class Reservation</S.FeatureCardTitle>
        <S.FeatureCardDesc>Real-time Class Announcement & Reservation System</S.FeatureCardDesc>
      </S.FeatureCard>
      
      {/* 4. Admin System (관리자 시스템) */}
      <S.FeatureCard>
        <S.FeatureIcon><i className="fi fi-br-settings"></i></S.FeatureIcon>
        <S.FeatureCardTitle>Admin Dashboard</S.FeatureCardTitle>
        <S.FeatureCardDesc>Integrated Admin Dashboard for Service Management</S.FeatureCardDesc>
      </S.FeatureCard>
      
    </S.FeatureGrid>
</S.FeatureSection>
      
      <S.SlidesSection>
        <S.SlidesTitle>Project Presentation</S.SlidesTitle>
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
export default Cooing;