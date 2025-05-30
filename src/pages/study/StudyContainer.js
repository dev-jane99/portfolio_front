import React from 'react'
import S from './style'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'

const StudyContainer = () => {

  

  return (
    <div>
      <S.StudyWrap>
        <Outlet />
      </S.StudyWrap>
      <Footer />
    </div>
  )
}

export default StudyContainer
