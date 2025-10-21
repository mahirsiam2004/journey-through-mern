import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import { router } from './router/router.jsx'



createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}></RouterProvider>,
)
