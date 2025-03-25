import React from 'react'
import S from "./style";
import Footer from '../layout/Footer';

const About = () => {
  return (
    <div>
    <S.AboutWrap>
      <S.Intro>
        <h1>Hi, I'm Jane, a junior web developer from Korea</h1>
        <br></br>
      </S.Intro>
      <S.Mid>
          <h2>EDUCATION</h2>
        <S.Education>
          <img src={process.env.PUBLIC_URL + "/assets/stenden.png"} alt="stenden logo" />
          <span>Bachelor of Arts (B.A.) in International Hospitality Management</span>
          <span>NHL Stenden University, Leeuwarden, Netherlands</span>
          <span>June 2023</span>
          <span>GPA : 3.28/4.0</span>
        </S.Education>
      </S.Mid>
    </S.AboutWrap>
    <Footer />
    </div>
  )
}

export default About