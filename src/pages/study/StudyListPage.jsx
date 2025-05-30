import React, { useEffect, useState } from 'react'
import axios from 'axios'
import S from './style'
import StudyCard from './StudyCard'
import { useNavigate } from 'react-router-dom'

const StudyListPage = () => {
  const [studies, setStudies] = useState([])
  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate()
  const keywordOptions = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Spring Boot', 'MySQL', 'Node.js'
  ]
  const [showAllKeywords, setShowAllKeywords] = useState(false);
  const MAX_VISIBLE = 11;
  
  const visibleKeywords = showAllKeywords ? keywordOptions : keywordOptions.slice(0, MAX_VISIBLE);
  
  useEffect(() => {
    const fetchStudies = async () => {
      const res = await axios.get(
        keyword ? `/api/study/search?keyword=${keyword}` : `/api/study`
      )
      setStudies(res.data)
    }

    fetchStudies()
  }, [keyword])
  

  return (
    <>
      <S.KeywordBox>
        <S.KeywordButton onClick={() => setKeyword('')} $isActive={keyword === ''}>
          All
        </S.KeywordButton>
        {visibleKeywords.map((word) => (
          <S.KeywordButton
            key={word}
            onClick={() => setKeyword(word)}
            $isActive={keyword === word}
          >
            {word}
          </S.KeywordButton>
        ))}
        {!showAllKeywords && keywordOptions.length > MAX_VISIBLE && (
          <S.KeywordButton onClick={() => setShowAllKeywords(true)}>
            더보기
          </S.KeywordButton>
        )}

        {showAllKeywords && (
          <S.KeywordButton onClick={() => setShowAllKeywords(false)}>
            간단히 보기
          </S.KeywordButton>
        )}
      </S.KeywordBox>


      <S.StudyList>
        {studies.map(study => (
          <StudyCard key={study.id} {...study} />
        ))}
      </S.StudyList>

      <S.Upload onClick={() => navigate('/study/upload')}>Add Post</S.Upload>
    </>
  )
}

export default StudyListPage
