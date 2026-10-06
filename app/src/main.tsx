import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App, readSettings } from './App';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App settings={readSettings()} />
  </StrictMode>,
);
