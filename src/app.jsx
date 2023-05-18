import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import Header from './components/header/header.jsx'
import "./utils/scss/app.scss"

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Header></Header>
      <RouterProvider router={router} />
    
    
  </React.StrictMode>,
)
