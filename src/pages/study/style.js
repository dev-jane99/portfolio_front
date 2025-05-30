import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

const S = {}

// studycontainer style
S.StudyWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
  padding: 90px 20px 40px;
  box-sizing: border-box;
  background-color: #000;
  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    margin-top: 100px;
  }
`

S.KeywordBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  overflow-x: auto;
  padding-bottom: 10px;
  margin-bottom: 20px;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  transition: all 0.3s ease;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4A90E2;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

S.KeywordButton = styled.button`
  flex: 1 1 calc(16.6% - 10px);
  max-width: calc(16.6% - 10px);
  min-width: 100px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({ $isActive }) => ($isActive ? '#4A90E2' : '#444')};
  background-color: ${({ $isActive }) => ($isActive ? '#919191' : '#111')};
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#ccc')};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#357ABD' : '#222')};
    color: #fff;
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(25% - 10px);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(33.3% - 10px);
  }

  @media (max-width: 480px) {
    flex: 1 1 calc(50% - 10px);
  }
`

S.Upload = styled.button`
  position: fixed;
  bottom: 80px;
  right: 40px;
  // border-radius: 10%;
  border: none;
  background: #919191;
  color: white;
  // width: 60px;
  // height: 60px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  // box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 10;

  &:hover {
    background: #fff;
    font-color: #000;
  }
`;

S.StudyList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  justify-content: center;
`;


// STUDy card style
S.StudyCard = styled.div`
  background: #111;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.25);
  }
`;

S.Thumbnail = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  background-color: #222;
`;

S.CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

S.CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
`;

S.KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

S.Keyword = styled.span`
  // background: #1e1e1e;
  // color: #4A90E2;
  // font-size: 0.75rem;
  // padding: 4px 8px;
  // border-radius: 12px;

  background: #ffffff22;
  color: #fff;
  border: 1px solid #ffffff44;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
`;

S.DetailLink = styled(Link)`
  margin-top: auto;
  font-size: 0.85rem;
  color: #4A90E2;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;


// newpost style
S.Form = styled.form`
  max-width: 600px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: #111;
  border-radius: 12px;
  color: #fff;
`

S.Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #222;
  color: #fff;
  ::placeholder {
    color: #777;
  }
`

S.TextArea = styled.textarea`
  padding: 12px;
  height: 180px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #222;
  color: #fff;
  resize: vertical;
  ::placeholder {
    color: #777;
  }
`

S.FileInput = styled.input.attrs({ type: 'file' })`
  background-color: transparent;
  border: 1px dashed #444;
  padding: 16px;
  color: #fff;
`

S.Button = styled.button`
  // padding: 14px;
  // font-size: 1rem;
  // background-color: #fff;
  // color: #000;
  // border: none;
  // border-radius: 8px;
  // cursor: pointer;
  // transition: 0.3s;
  // &:hover {
  //   background-color: #ccc;
  // }

  // background: #444;
  // color: white;
  // padding: 10px 18px;
  // font-size: 15px;
  // border: none;
  // border-radius: 6px;
  // cursor: pointer;

  // &:hover {
  //   background: #222;
  // }

  background: #ffffff11;
  color: #fff;
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.2s;

  &:hover {
    background: #ffffff33;
  }
`

// new post style
export const GlobalEditorStyle = createGlobalStyle`
   .editor-wrapper {
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .editor {
    padding: 12px;
    min-height: 300px;
    font-size: 1rem;
    background-color: #fff;
    color: #000;
  }

  .rdw-editor-toolbar {
    background: #f8f8f8;
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
    padding: 6px;
  }

  .rdw-option-wrapper {
    background: #fff;
    border: 1px solid #ccc;
    margin: 0 4px;
    padding: 4px;
    cursor: pointer;
  }

  .rdw-option-wrapper:hover {
    background-color: #eee;
  }

    .is-active {
  background: #4A90E2;
  color: white;
  }
  button {
    padding: 6px 12px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
  }

`
S.EditorWrapper = styled.div`
  background: #fff;
  color: #000;
  padding: 12px;
  border-radius: 8px;
  min-height: 300px;

  .ProseMirror img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 12px 0;
    border-radius: 8px;
  }
`

//study Detail style
S.Loading = styled.p`
  text-align: center;
  padding: 80px 0;
  font-size: 18px;
  color: #666;
`

S.DetailWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 40px 24px;
  margin: 0 auto;
  color: #f5f5f5;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px 16px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 12px;
    font-size: 14px;
  }
`

S.Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
`
S.Content = styled.div`
  line-height: 1.8;
  font-size: 17px;
  color: #ddd;

  img {
    max-width: 100%;
    display: block;
    margin: 24px auto;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(255,255,255,0.1);
  }

  p {
    margin: 14px 0;
  }

  h2 {
    font-size: 24px;
    margin: 32px 0 16px;
    color: #fff;
  }

  blockquote {
    border-left: 4px solid #888;
    padding-left: 16px;
    margin: 24px 0;
    color: #ccc;
    font-style: italic;
  }

  ul, ol {
    padding-left: 24px;
    margin: 12px 0;
  }

  li {
    margin-bottom: 8px;
  }

  strong {
    font-weight: bold;
    color: #fff;
  }

  em {
    font-style: italic;
    color: #ccc;
  }
`

S.InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #777;
  margin-bottom: 24px;
`

S.ActionBar = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;

    img {
      filter: brightness(0) invert(1);
    }
  }
`


S.KeyWordTag = styled.div`
  margin: 32px 0 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`


export default S;
