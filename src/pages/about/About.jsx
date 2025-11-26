import React from 'react'
import S from "./style";
import Footer from '../layout/Footer';

const logos = [
  'css.svg', 'dbeaver.svg', 'eclipse.svg', 'figma.svg', 'intelij.svg',
  'javascript.svg', 'nodejs.svg', 'oracle.svg', 'react.svg',
  'springboot.png', 'spss.png', 'styledcomponent.svg', 'swagger.svg',
  'tomcat.svg', 'vscode.svg', 'java.svg', 'html.svg', 'mysql.svg',
  'github.svg', 'postman.svg'
];

const About = () => {
  return (
    <S.body>
      <S.MainContainer>
        <S.IntroContainer>
          <h1>I'm Jane Ryo</h1>
          {/* <h2>Junior Web Developer</h2> */}
          <span><strong>Born in</strong> Korea</span>
          <span><strong>Studied in</strong> Ireland & The Netherlands</span>
          <span><strong>Worked in</strong> New York</span>
        </S.IntroContainer>

        <S.ContentContainer>
          <S.SliderContainer>
            <S.LogoTrack>
              {logos.concat(logos).map((logo, index) => (
                <S.LogoWrapper key={index}>
                  <S.Logo src={`/assets/about/${logo}`} alt={logo.replace(/\.(svg|png)/, '')} />
                </S.LogoWrapper>
              ))} 
            </S.LogoTrack>
            <S.GradientOverlay />
          </S.SliderContainer>

          <S.ProfileSection>
            <S.ProfileImage src="../assets/about/profile.png" alt="profile" />
            <S.ProfileIntro>
              <h2>My Journey into Development</h2>
              <p>
                During my internship at the Grand Hyatt New York, I frequently encountered technical issues in the hotel management systems.
                They were inconvenient and lacked necessary features for real-time operations. That sparked a curiosity: "Could I make something better myself?"
                After graduation, attending a career forum in Tokyo made me realize the rising global demand in this field, which solidified my decision to pursue development.
                <S.ButtonGroup>
                  <S.ResumeButton href="/assets/about/resume_en.pdf" target="_blank">View Resume (English)</S.ResumeButton>
                  <S.ResumeButton href="/assets/about/resume_jp.pdf" target="_blank">レジュメを見る（日本語）</S.ResumeButton>
                </S.ButtonGroup>
              </p>
            </S.ProfileIntro>
          </S.ProfileSection>
          <S.BentoGrid>
            <S.BentoCard>
              <h2>About Me</h2>
              <p>
                I’m a highly curious and proactive developer with a hospitality background and global mindset.  
                I thrive on collaborative problem solving and enjoy transforming complex ideas into intuitive digital experiences.  
                I take pride in being adaptable, communicative, and detail-oriented—especially when working across cultures and teams.
              </p>
              <S.TagGrid>
                <S.Tag>Strong interpersonal Skills</S.Tag>
                <S.Tag>User-Centered Thinking</S.Tag>
                <S.Tag>Team Leadership</S.Tag>
                <S.Tag>Curiosity-Driven Learning</S.Tag>
                <S.Tag>Global Mindset</S.Tag>
                <S.Tag>Cross-Cultural Collaboration</S.Tag>
                <S.Tag>Adaptability</S.Tag>
                <S.Tag>Public Speaking</S.Tag>
                <S.Tag>Planning & Coordination</S.Tag>
              </S.TagGrid>
            </S.BentoCard>
            <S.BentoCard>
            <h2>IT Education</h2>
              <ul>
                <li>
                  <strong>IT Bootcamp, Korea IT Academy:</strong> 07.2024 - 12.2024 Completed  
                  <br />
                  <em>Government-funded full-time course (832 hours) focused on full-stack development</em>  
                  <ul>
                    <li>Backend: Java, JSP, Spring Boot, Spring MVC, Spring Security</li>
                    <li>Frontend: HTML, CSS, JavaScript, React (SPA architecture)</li>
                    <li>Database: MySQL, Oracle, JDBC integration, SQL (DDL, DML)</li>
                    <li>Tools & Practices: Git/GitHub, AWS deployment, Postman, Swagger</li>
                    <li>Learned real-world skills such as REST API design, async data handling (fetch), team collaboration using PR & merge flows</li>
                  </ul>
                </li>
              </ul>
            </S.BentoCard>
            <S.BentoCard>
              <h2>IT Projects</h2>
              <ul>
                <li><strong>Product Manager @ POWPOW</strong><br />
                  <strong>Duration: 09.2024 - 12.2024</strong><br />
                  Led a team of 7 to build a pet-themed ecommerce platform with a personalized test, managing planning, development, and deployment.
                </li>
                <li><strong>Full-Stack Developer @ COOING</strong><br />
                  <strong>Duration: 04.2025 - 07.2025</strong><br />
                  Designing and building a full-stack workshop reservation and ecommerce platform.
                </li>
                <li><strong>Full-Stack Developer @ WEB-PORTFOLIO</strong><br />
                  <strong>Duration: 04.2025 - 11.2025</strong><br />
                  Designing and building a personal web-portfolio.
                </li>
              </ul>
            </S.BentoCard>
            <S.BentoCard>
              <h2>Communication & Leadership Activities</h2>
              <ul>
                <li>
                  - Represented a engineering company at the 2023 Road Traffic Expo (KINTEX), introducing products to the public.<br />
                  - Member of Toastmasters International, improving public speaking and leadership.<br />
                  - Attended BNI Collaboration Conference and Next-generation CEO School.
                </li>
              </ul>
            </S.BentoCard>

            <S.BentoCard>
              <h2>Language Skills</h2>
              <ul>
                <li><strong>English:</strong> Fluent – Studied and worked in English-speaking countries. TOEIC Speaking Advanced-Mid / Sep 2023</li>
                <li><strong>Japanese:</strong> Daily conversation capable. Higher-level study in Ireland. VPPR of Japanese-English Toastmasters club.</li>
                <li><strong>Korean:</strong> Native</li>
                <li><strong>Dutch:</strong> Basic communication (CEFR A1) / Nov 2019</li>
              </ul>
            </S.BentoCard>

            <S.BentoCard>
              <h2>Certificates & Recognition</h2>
              {/* <S.Certificates>
                <S.CertificateItem>
                  <img src="/assets/about/sqld.jpg" alt="SQLD" />
                  <p>SQLD Certificate</p><br />
                  <p>Certified as SQL Developer (SQLD) by K-DATA on April 4, 2025</p>
                </S.CertificateItem>
                <S.CertificateItem>
                  <img src="/assets/about/certificate1.jpg" alt="Certificate 1" />
                  <p>Completion - IT Academy</p>
                </S.CertificateItem>
                <S.CertificateItem>
                  <img src="/assets/about/certificate2.jpg" alt="Certificate 2" />
                  <p>Perfect Attendance</p><br />
                  <p><strong>Training Period:</strong> July 23, 2024 - December 24, 2024 <br />
                  <strong>Total Attendance Hours/Days:</strong> 832 hours / 105 days <br />
                  <strong>Highlights:</strong> 0 instances of tardiness / early departures / absences achieved</p>
                </S.CertificateItem>
                <S.CertificateItem>
                  <img src="/assets/about/certificate3.jpg" alt="Certificate 3" />
                  <p>Work Excellence Award</p>
                  <p><strong>Training Period:</strong> July 23, 2024 - December 24, 2024 <br />
                  <strong>Highlights:</strong> Project Manager / Main presentor</p>
                </S.CertificateItem>
              </S.Certificates> */}
              <S.Certificates>
                <S.CertificateItem>
                  <img src="/assets/about/sqld.jpg" alt="SQLD" />
                  <p className="title">SQLD Certificate</p>
                  <p className="desc">
                    Certified as SQL Developer (SQLD) by <br />
                    K-DATA on April 4, 2025
                  </p>
                </S.CertificateItem>

                <S.CertificateItem>
                  <img src="/assets/about/certificate1.jpg" alt="Certificate 1" />
                  <p className="title">Completion - IT Academy</p>
                  <p className="desc">
                   <strong>Training Period:</strong> July 23, 2024 - December 24, 2024 <br /> 
                  </p> 
                </S.CertificateItem>

                <S.CertificateItem>
                  <img src="/assets/about/certificate2.jpg" alt="Certificate 2" />
                  <p className="title">Perfect Attendance</p>
                  <p className="desc">
                    <strong>Training Period:</strong> July 23, 2024 - December 24, 2024 <br />
                    <strong>Total Attendance Hours/Days:</strong> 832 hours / 105 days <br />
                    <strong>Highlights:</strong> 0 instances of tardiness / early departures /
                    absences achieved
                  </p>
                </S.CertificateItem>

                <S.CertificateItem>
                  <img src="/assets/about/certificate3.jpg" alt="Certificate 3" />
                  <p className="title">Work Excellence Award</p>
                  <p className="desc">
                    <strong>Training Period:</strong> July 23, 2024 - December 24, 2024 <br />
                    <strong>Highlights:</strong> Project Manager / Main presentor
                  </p>
                </S.CertificateItem>
              </S.Certificates>
            </S.BentoCard>


            <S.BentoCard>
              <h2>Future Goals & Growth</h2>
              <p>
                My goal is to create systems that bridge real-world workflow gaps. I aim to develop scalable, inclusive, and efficient web services that reduce user friction and enhance communication.
              </p>
            </S.BentoCard>
          </S.BentoGrid>

        </S.ContentContainer>
      </S.MainContainer>
      <Footer />
    </S.body>
  )
}

export default About;
