import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import axios from 'axios'
import S from './style'

const UpdatePost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const fileInputRef = useRef()

  const [title, setTitle] = useState('')
  const [keywords, setKeywords] = useState('')
  const [imageUrls, setImageUrls] = useState([])

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: '<p>불러오는 중...</p>',
  })

  // 기존 데이터 로딩
  useEffect(() => {
    const fetchStudy = async () => {
      try {
        const res = await axios.get(`/api/study/${id}`)
        const { title, content, keywords, images } = res.data
        setTitle(title)
        setKeywords(keywords)
        setImageUrls(images || [])
        editor?.commands.setContent(content)
      } catch (err) {
        console.error('수정 데이터 불러오기 실패:', err)
      }
    }

    if (editor) fetchStudy()
  }, [id, editor])

  const handleImageUpload = async (e) => {
    const files = e.target.files
    if (!files || !editor) return

    for (const file of files) {
      const formData = new FormData()
      formData.append('image', file)

      try {
        const res = await axios.post('/api/study/upload/image', formData)
        const imageUrl = res.data
        editor.chain().focus().setImage({ src: `http://localhost:8080${imageUrl}` }).run()
        setImageUrls(prev => [...prev, { imageUrl }])
      } catch (err) {
        console.error('이미지 업로드 실패:', err)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!editor) return

    const data = {
      title,
      content: editor.getHTML(),
      keywords,
    }

    const formData = new FormData()
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }))
    formData.append('images', new Blob([JSON.stringify(imageUrls)], { type: 'application/json' }))

    try {
      await axios.put(`/api/study/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      alert('수정 완료!')
      navigate('/study')
    } catch (err) {
      console.error('수정 실패:', err)
      alert('수정 실패')
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

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

      <S.EditorWrapper>
        <EditorContent editor={editor} />
      </S.EditorWrapper>

      <S.Input
        type="text"
        placeholder="키워드"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />

      <S.Button type="submit">수정 완료</S.Button>
    </S.Form>
  )
}

export default UpdatePost
