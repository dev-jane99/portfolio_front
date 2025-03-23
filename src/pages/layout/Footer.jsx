import React from 'react'
import S from "./style"

const Footer = () => {
  return (
    <S.Footer>
      <S.BottomLogo>
        <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt="logo" />
      </S.BottomLogo>
      <S.FooterInfo>
        <p>quotes from the book</p>
      </S.FooterInfo>
    </S.Footer>
  )
}

export default Footer