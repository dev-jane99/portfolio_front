import React from 'react'
import S from './style'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'

export const StudyContainer = () => {
  return (
    <div>
    <S.StudyWrap>
        <S.Upload>
            Add more
            <Outlet />
        </S.Upload>
    </S.StudyWrap>
    <Footer />
    </div>
  )
}
export default StudyContainer