import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { GlobalEditorStyle } from './pages/study/style'
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function App() {
  return (
    <>
    <RouterProvider router={router} />
    <GlobalEditorStyle />
    </>
  );
}

export default App;