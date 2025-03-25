import React from "react";
import S from "./style";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <div>
      <h1>Team Project</h1>
      <S.Powpow>
      <Link to={"powpow"}>
          <img src={process.env.PUBLIC_URL + "../assets/powpow/powpow.png"} 
            alt="powpow logo" />
          <S.Name>POWPOW</S.Name>
      </Link>
      </S.Powpow>
    </div>
  );
};

export default Projects;
