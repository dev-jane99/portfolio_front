import React from 'react'
import S from "./style";
import Footer from '../layout/Footer';

const logos = [
  'css.svg',
  'dbeaver.svg',
  'eclipse.svg',
  'figma.svg',
  'intelij.svg',
  'javascript.svg',
  'linux.svg',
  'nodejs.svg',
  'oracle.svg',
  'react.svg',
  'springboot.png',
  'spss.png',
  'styledcomponent.svg',
  'swagger.svg',
  'tomcat.svg',
  'vscode.svg',
  'java.svg',
  'html.svg',
  'mysql.svg',
  'github.svg'
];

const About = () => {
  return (
    // <div>
    // <S.AboutWrap>
    //   <S.Intro>
    //     <p>아시아를 넘어 유럽, 미국으로.<br />강한 글로벌 마인드셋, 제가 개발자를 선택한 이유입니다</p>
    //     {/* <img src={process.env.PUBLIC_URL + "/assets/profile.png"} alt="profile" /> */}
    //   </S.Intro>
    //     <br></br>
    //   <S.AboutContainer>
    //   <S.SliderContainer>
    //   <S.LogoTrack>
    //     {logos.concat(logos).map((logo, index) => (
    //       <S.LogoWrapper key={index}>
    //         <S.Logo 
    //           src={`/assets/about/${logo}`} 
    //           alt={logo.replace('.svg', '')} 
    //         />
    //       </S.LogoWrapper>
    //     ))}
    //   </S.LogoTrack>
    //   <S.GradientOverlay />
    // </S.SliderContainer>
    //       <h2>EDUCATION</h2>
    //     <S.Education>
    //       <img src={process.env.PUBLIC_URL + "/assets/stenden.png"} alt="stenden logo" />
    //       <span>Bachelor of Arts (B.A.) in International Hospitality Management</span>
    //       <span>NHL Stenden University, Leeuwarden, Netherlands</span>
    //       <span>June 2023</span>
    //       <span>GPA : 3.28/4.0</span>
    //     </S.Education>
    //   </S.AboutContainer>
    // </S.AboutWrap>
    // <Footer />
    // </div>
    <S.body>
    <S.MainContainer>
    <S.IntroContainer>
      <h1>I'm Jane Ryo</h1>
      <h2>Junior Web Developer</h2>
      <span>
        <strong>Born in</strong> Korea
      </span>
      <span>
        <strong>Studied in</strong> Ireland & The Netherlands
      </span>
      <span>
        <strong>Worked in</strong> NewYork
      </span>
    </S.IntroContainer>
  
  <S.ContentContainer>
  <S.SliderContainer>
    <S.LogoTrack>
      {logos.concat(logos).map((logo, index) => (
    <S.LogoWrapper key={index}>
    <S.Logo src={`/assets/about/${logo}`} alt={logo.replace('.svg .png', '')} />
    </S.LogoWrapper>
      ))} 
</S.LogoTrack>
<S.GradientOverlay />
</S.SliderContainer>
    <S.Content>
      <S.ProfileWrap>
        {/* <S.ProfileImage src="../assets/about/profile.png" alt="profile" /> */}
        <S.ProfileDetail></S.ProfileDetail>
      </S.ProfileWrap>
      <p>Technology knows no borders, and I believe a true developer is someone who can build solutions that transcend cultures and connect people across the world. With an international background and a deep passion for problem-solving, I am committed to creating impactful digital experiences that resonate on a global scale.
        ʻFrom Asia to Europe and the U.S., my journey has shaped me into a developer who values innovation, adaptability, and the power of technology to bring people together. As I continue to grow, I aim to contribute to projects that break barriers and redefine what’s possible in the ever-evolving world of software development.
      </p>
      <h2>Career goals</h2>
      <p>Currently, I am expanding my expertise in backend development with Spring Boot and AWS, while also refining my frontend skills with React. My goal is to work on global software solutions that drive innovation and efficiency.</p>
      <p>awards</p>
      <p>education</p>
     </S.Content>
  </S.ContentContainer>
</S.MainContainer>
  <Footer />
</S.body>
  )
  
}

export default About