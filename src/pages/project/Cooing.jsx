import React from 'react'
import S from './style';

const Cooing = () => {
  return (
<S.PowpowContainer>
      <S.Header>
        {/* <S.Title>POWPOW</S.Title> */}
        <S.Logo 
          src={process.env.PUBLIC_URL + "../assets/cooing/cooinglogo_white.svg"} 
          alt="cooing logo"
        />
      </S.Header>
      
      <S.ProjectInfo>
        <S.Brief>'pet'sonality test oriented shopping site</S.Brief>
        <S.Description>
          A comprehensive platform that analyzes pet personality to recommend personalized products.
        </S.Description>
        <S.Description>
          🏛️ Class reservation • 💳 Payment/Delivery • 🛡️ Admin System
        </S.Description>
        <S.Description>
          <strong>Project Duration:</strong> 2025.04 - 2025.06 (2 months) | <strong>Self Project</strong>
        </S.Description>
        <S.Description>
          <strong>Tech Stack:</strong> React, Node.js, MySQL
        </S.Description>
        <S.Description>
          <strong>Role:</strong> Team Leader/PM - Progress tracking, team coordination, idea planning<br/>
          Full participation in development, design, deployment, and project presentation
        </S.Description>
      </S.ProjectInfo>
      
      <S.FeatureSection>
        <S.FeatureTitle>Key Features</S.FeatureTitle>
        <S.FeatureGrid>
          <S.FeatureCard>
            <S.FeatureIcon>🛍️</S.FeatureIcon>
            <S.FeatureCardTitle>Shopping System</S.FeatureCardTitle>
            <S.FeatureCardDesc>Personalized product recommendations based on personality analysis</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>📱</S.FeatureIcon>
            <S.FeatureCardTitle>SNS Features</S.FeatureCardTitle>
            <S.FeatureCardDesc>Post creation, likes, and comment functionality</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>🏠</S.FeatureIcon>
            <S.FeatureCardTitle>My Home</S.FeatureCardTitle>
            <S.FeatureCardDesc>Pet registration, post management, and purchase history</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>💳</S.FeatureIcon>
            <S.FeatureCardTitle>Payment/Delivery</S.FeatureCardTitle>
            <S.FeatureCardDesc>Integrated payment system and delivery management</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>👨‍💼</S.FeatureIcon>
            <S.FeatureCardTitle>Seller Service</S.FeatureCardTitle>
            <S.FeatureCardDesc>Product registration, order management, and sales analytics</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>🛡️</S.FeatureIcon>
            <S.FeatureCardTitle>Admin System</S.FeatureCardTitle>
            <S.FeatureCardDesc>Comprehensive service management and statistics</S.FeatureCardDesc>
          </S.FeatureCard>
        </S.FeatureGrid>
      </S.FeatureSection>
      
      <S.SlidesSection>
        <S.SlidesTitle>Project Presentation</S.SlidesTitle>
        <S.SlidesGrid>
      {/* <S.ProjectInfo>
        <S.Brief>'pet'sonality test oriented shopping site</S.Brief>
        <S.Description>
          반려동물의 성격을 분석하여 맞춤형 상품을 추천하는 종합 플랫폼입니다.
        </S.Description>
        <S.Description>
          🛍️ 쇼핑 • 📱 SNS • 🏠 마이홈 • 💳 결제/배송 • 👨‍💼 판매자 • 🛡️ 관리자 시스템
        </S.Description>
        <S.Description>
          <strong>프로젝트 기간:</strong> 2024.10 - 2024.12 (3개월) | <strong>팀 프로젝트</strong>
        </S.Description>
        <S.Description>
          <strong>기술 스택:</strong> React, Node.js, DBeaver(Oracle SQL)
        </S.Description>
        <S.Description>
          <strong>담당 역할:</strong> 팀리더/PM - 진행 트래킹, 팀원 조율, 아이디어 기획<br/>
          개발, 디자인, 배포, 프로젝트 발표 전반 참여
        </S.Description>
      </S.ProjectInfo>
      
      <S.FeatureSection>
        <S.FeatureTitle>주요 기능</S.FeatureTitle>
        <S.FeatureGrid>
          <S.FeatureCard>
            <S.FeatureIcon>🛍️</S.FeatureIcon>
            <S.FeatureCardTitle>쇼핑 시스템</S.FeatureCardTitle>
            <S.FeatureCardDesc>성격분석 기반 맞춤형 상품 추천</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>📱</S.FeatureIcon>
            <S.FeatureCardTitle>SNS 기능</S.FeatureCardTitle>
            <S.FeatureCardDesc>게시물 작성, 좋아요, 댓글 기능</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>🏠</S.FeatureIcon>
            <S.FeatureCardTitle>마이홈</S.FeatureCardTitle>
            <S.FeatureCardDesc>반려동물 등록, 게시물 관리, 구매 내역</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>💳</S.FeatureIcon>
            <S.FeatureCardTitle>결제/배송</S.FeatureCardTitle>
            <S.FeatureCardDesc>통합 결제 시스템 및 배송 관리</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>👨‍💼</S.FeatureIcon>
            <S.FeatureCardTitle>판매자 서비스</S.FeatureCardTitle>
            <S.FeatureCardDesc>상품 등록, 주문 관리, 매출 분석</S.FeatureCardDesc>
          </S.FeatureCard>
          <S.FeatureCard>
            <S.FeatureIcon>🛡️</S.FeatureIcon>
            <S.FeatureCardTitle>관리자 시스템</S.FeatureCardTitle>
            <S.FeatureCardDesc>전체 서비스 관리 및 통계</S.FeatureCardDesc>
          </S.FeatureCard>
        </S.FeatureGrid>
      </S.FeatureSection>
      
      
      <S.SlidesSection>
        <S.SlidesTitle>프로젝트 발표 자료</S.SlidesTitle>
        <S.SlidesGrid> */}
          <S.SlideContainer>
            <S.Slide 
              src={process.env.PUBLIC_URL + "../assets/powpow/slide1.png"} 
              alt="프로젝트 개요" 
            />
          </S.SlideContainer>
          <S.SlideContainer>
            <S.Slide 
              src={process.env.PUBLIC_URL + "../assets/powpow/slide2.png"} 
              alt="주요 기능" 
            />
          </S.SlideContainer>
        </S.SlidesGrid>
      </S.SlidesSection>
    </S.PowpowContainer>
  )
}
export default Cooing;