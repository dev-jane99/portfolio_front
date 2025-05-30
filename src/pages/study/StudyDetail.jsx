// StudyDetail.jsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import S from './style'

const StudyDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [study, setStudy] = useState(null)

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`/api/study/${id}`)
        setStudy(res.data)
      } catch (err) {
        console.error('불러오기 실패:', err)
      }
    }

    fetchDetail()
  }, [id])

  if (!study) return <S.Loading>불러오는 중...</S.Loading>

  const { title, content, keywords, createdAt } = study

  const handleDelete = async (id, navigate) => {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (!confirmDelete) return;
  
    try {
      await axios.delete(`/api/study/${id}`);
      alert('삭제 완료되었습니다.');
      navigate('/study');
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  return (
    <S.DetailWrapper>
      <S.Title>{title}</S.Title>

      <S.InfoBar>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
        <S.KeyWordTag>
          {keywords?.split(',').map((kw, i) => (
            <S.Keyword key={i}>#{kw.trim()}</S.Keyword>
          ))}
        </S.KeyWordTag>
      </S.InfoBar>

      <S.Content dangerouslySetInnerHTML={{ __html: content }} />


      <S.ActionBar>
        <S.Button onClick={() => navigate('/study')}>← Back to list</S.Button>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <S.Button onClick={() => navigate(`/study/edit/${id}`)}>Edit</S.Button>

          <S.Button onClick={() => handleDelete(id, navigate)}>Delete</S.Button>
        </div>
      </S.ActionBar>
    </S.DetailWrapper>
  )
}

export default StudyDetail
