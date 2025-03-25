import { styled, keyframes } from 'styled-components';

const S = {};

const textAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(8rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const imageAppear = keyframes`
  from {
    filter: saturate(0) contrast(4) brightness(0.1) blur(3px);
    opacity: 0;
    transform: scale(0.95) translateY(4rem);
  }
  to {
    filter: saturate(1) contrast(1) brightness(1) blur(0);
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

S.AboutWrap = styled.div`
  margin: 0;
  font-size: 1.3rem;
  color: #919191;
  line-height: 1.5;
  display: grid;
  grid-template-columns: 
    [full-start] minmax(1em, 1fr) 
    [main-start] minmax(0, 40em) [main-end]
    minmax(1em, 1fr) [full-end];
`;

S.Intro = styled.section`
  grid-column: main;
  text-align: center;
  margin-top: 100px;

  & h1 {
    font-size: 50px;
    animation: ${textAppear} ease-in both;
    animation-timeline: view(); 
    animation-range: entry 20% cover 50%;
  }

  // & p {
  //   font-size: 30px;
  //   animation: ${textAppear} ease-in both;
  //   animation-timeline: view();
  //   animation-range: entry 20% cover 50%;
  // }
  //   & img {
  //   width: 300px;
  //   height: auto;
  //   margin-top: 20px;
  //   animation: ${imageAppear} ease-in both;
  //   animation-timeline: view(); 
  //   animation-range: entry 20% cover 50%;
  //   }
`;

S.Education = styled.section`
    display: flex;

    & img {
    width: 100px;
    height: auto;
    margin-top: 20px;
    animation: ${imageAppear} ease-in both;
    animation-timeline: view(); 
    animation-range: entry 20% cover 50%;
    }
`;

S.Mid = styled.section`
    grid-column: main;
    text-align: center;
    margin-top: 20px;

  & span {
    font-size: 20px;
    animation: ${textAppear} 1.2s ease-in-out both;
  }

  // & p {
  //   font-size: 30px;
  //   animation: ${textAppear} 1.5s ease-in-out both;
  // }
`;

export default S;
