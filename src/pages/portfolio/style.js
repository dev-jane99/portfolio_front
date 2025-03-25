import { styled } from "styled-components";

// project styles
const S = {};

    S.Projects = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
`;

S.Powpow = styled.div`
  display: flex;
  flex-direction: column;;
  justify-content: center;
  align-items: center;

  & img {
    width: 50%;
  }
`;


S.Image = styled.div`
  margin-top: 100px;
  
  & img {
    width: 50%;
  }
`;

S.Detail = styled.div`
  display: block;
    & img {
        width: 500px;
    }
`;

S.Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

`;
S.Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: none;
  color: #000000
`;



export default S;