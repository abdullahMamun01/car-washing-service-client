import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './../App';

import './css/style.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
