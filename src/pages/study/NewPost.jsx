import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEditor, EditorContent } from '@tiptap/react'
import axios from 'axios'
import S from './style'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [keywords, setKeywords] = useState('')
  const fileInputRef = useRef()
  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState([])

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image
    ],
    content: '<p>Start writting here!</p>',
  })

  const handleImageUpload = async (e) => {
    const files = e.target.files
    if (!files || !editor) return
  
    for (const file of files) {
      const formData = new FormData()
      formData.append('image', file)
  
      try {
        //배포를 위한 이미지 저장 장소 추가
        const BASE_URL = process.env.REACT_APP_API_BASE;
        const res = await axios.post(`${BASE_URL}/api/study/upload/image`, formData);
        const imageUrl = `${BASE_URL}${res.data}`;
        //배포 말고 내가 개인적으로 사진 내 드라이브에 저장할때 사용함
        // const res = await axios.post('/api/study/upload/image', formData)
        // const imageUrl = 'http://localhost:8080' + res.data 
  

        editor.chain().focus().setImage({ src: imageUrl }).run()
  
        setImageUrls(prev => [...prev, res.data]) 
      } catch (err) {
        console.error('이미지 업로드 실패:', err)
      }
    }
    e.target.value = null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!editor) {
      alert('에디터 준비 중입니다.')
      return
    }
    

    const formData = new FormData()
    const studyData = {
      title,
      content: editor.getHTML(),
      keywords,
    }

    formData.append(
      'data',
      new Blob([JSON.stringify(studyData)], { type: 'application/json' })
    )

    formData.append('images', new Blob([JSON.stringify(
      imageUrls.map(url => ({ imageUrl: url })) // ImageVO 형식
    )], { type: 'application/json' }))

    try {
      await axios.post('/api/study', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      alert('등록 성공!')
      navigate('/study');
    } catch (err) {
      console.error('등록 실패:', err)
      alert('등록 실패')
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {editor && (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>Bold</button>
          <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>Italic</button>
          <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>H2</button>
          <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}>• List</button>
          <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}>1. List</button>
          <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'is-active' : ''}>“ Quote</button>
          <button type="button" onClick={() => fileInputRef.current?.click()}>image</button>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </div>
      )}
      <S.EditorWrapper>
        <EditorContent editor={editor} />
      </S.EditorWrapper>
      <S.Input
        type="text"
        placeholder="키워드 (쉼표로 구분)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <S.Button type="submit">작성 완료</S.Button>
    </S.Form>
  )
}

export default NewPost
