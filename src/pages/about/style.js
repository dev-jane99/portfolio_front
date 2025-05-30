import { styled, keyframes} from 'styled-components';

const S = {};

// const textAppear = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(8rem);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const imageAppear = keyframes`
//   from {
//     filter: saturate(0) contrast(4) brightness(0.1) blur(3px);
//     opacity: 0;
//     transform: scale(0.95) translateY(4rem);
//   }
//   to {
//     filter: saturate(1) contrast(1) brightness(1) blur(0);
//     opacity: 1;
//     transform: scale(1) translateY(0);
//   }
// `;
// // const slideAnimation = keyframes`
// //   from {
// //     transform: translateX(0%);
// //   }
// //   to {
// //     transform: translateX(-50%);
// //   }
// // `;


// 왼쪽으로 이동하는 애니메이션
const slideAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-20%); }
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
  // width: 100%;
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
  // border: 1px solid #dddddd;
  border-radius: 50px;
  width: 100px;
  padding: 10px;
`;

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
`;


S.ContentContainer = styled.section` {
  position: relative;
  display: block;
  // background-color: #ffffff;
  background-color: #919191;
  z-index: 1;
`;

S.Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 75px 50px;
  background-color: #ffffff;
}

& h2 {
  color: #131313;
  text-align: center;
  font-size: 50px;
  font-weight: 800;
}

 & p {
    color: black;
    font-size: 25px;  
  }
`;

S.ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
`

// S.ProfileImage = styled.img`
//   border-radius: 50%;
//   max-width: 400px;
// `;

S.ProfileDetail = styled.div`
`



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
  // background-color: rgb(224, 224, 224);
  background-color: #000000;

  & h2 {
    color: #ffffff;
    font-size: clamp(20px, 6vw, 60px);
    font-weight: 600;
    line-height: 70px;
  }

  & span{
    text-align: center;
    color: #ffffff;
    font-size: 40px;  
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

export default S;
