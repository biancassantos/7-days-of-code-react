import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Pages } from "./pages/index.jsx";
import './assets/styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pages />
  </StrictMode>,
)
