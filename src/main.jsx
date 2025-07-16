import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

createRoot(document.getElementById('root')).render(


  <StrictMode>
    
    <div className='sora-font bg-[#1A202C] '>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#ffffff',
          },
        }}
      />
    </div>
  </StrictMode>,
)
