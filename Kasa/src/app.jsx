import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import "./utils/scss/app.scss"

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
