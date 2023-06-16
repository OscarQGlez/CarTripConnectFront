import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'
import { ThemeProvider } from "@mui/material/styles"
import { customTheme } from './theme/Theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ThemeProvider theme={customTheme}>
    <RouterProvider router={router} />
</ThemeProvider>
  </React.StrictMode>,
)
