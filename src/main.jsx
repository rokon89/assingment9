import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Compones/Route/Routes.jsx'
import "./index.css";
import AuthContext from './Compones/Fierbase/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthContext>
)
