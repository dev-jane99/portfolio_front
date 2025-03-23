import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
// import {I18nextProvider} from 'react-i18next';
// import i18n from './i18n';
// import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;