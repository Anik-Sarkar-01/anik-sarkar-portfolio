import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='poppins-regular bg-[#1A202C]'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
