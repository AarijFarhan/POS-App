import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createRoutesFromElements, Route, Router } from 'react-router-dom'
import Layout from './Pages/Layout.jsx'
import { createBrowserRouter , RouterProvider } from'react-router-dom'
import Navigation from './Pages/Navigation.jsx'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/home" element={<Layout />}> 
    </Route>



  )   
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)














