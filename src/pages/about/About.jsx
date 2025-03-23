import React from 'react'
import S from "./style";
// import { useTranslation } from 'react-i18next';

const About = () => {
    // 번역기능 추가
    // const { t } = useTranslation();
  return (
    <S.AboutWrap>
        {/* <h1>{t('welcome')}</h1>
        <p>{t('description')}</p> */}
        <h1>Hello I'm Jane</h1>
    </S.AboutWrap>
  )
}

export default About