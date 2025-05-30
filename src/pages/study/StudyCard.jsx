import React from 'react'
import S from './style'

const StudyCard = ({ id, title, images = [], keywords }) => {
  const thumbnail = images.length > 0 ? images[0].imageUrl : 'assets/study/default.png'
  console.log("썸네일 이미지:", images)
  
  return (
    <S.StudyCard>
      <S.Thumbnail src={thumbnail} alt="썸네일 이미지" />
      <S.CardContent>
        <S.CardTitle>{title}</S.CardTitle>
        <S.KeywordList>
          {keywords?.split(',').map((kw, idx) => (
            <S.Keyword key={idx}>#{kw.trim()}</S.Keyword>
          ))}
        </S.KeywordList>
        <S.DetailLink to={`/study/${id}`}>자세히 보기 →</S.DetailLink>
      </S.CardContent>
    </S.StudyCard>
  )
}

export default StudyCard
