# Installed

npm create vite@latest CarTripConnectFront
npm install
creamos la carpeta router - index.jsx

    import { createBrowserRouter } from "react-router-dom";
    import App from "../App";

    export const router = createBrowserRouter([
        { path: '/', element: <App/>}
    ])

instalamos: 
    npm install react-router-dom@6


en el archivo main .jsx: 
    import { RouterProvider } from 'react-router-dom'
    import { router } from './router/index.jsx'


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  

  material UI
  npm install @mui/material @emotion/react @emotion/styled
