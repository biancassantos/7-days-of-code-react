import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/index.css';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import { PostsContextProvider } from './contexts/PostsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)