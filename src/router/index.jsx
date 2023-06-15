import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Root from '../layout'
import NotFound from "../pages/NotFound/NotFound";
import LoginPage from "../pages/LoginPage/LoginPage";
import { Children } from "react";

export const router = createBrowserRouter([
    // { path: '/', element: <App/>}
    { path: '/', 
    element: <Root/>,
    errorElement: <NotFound />,
    children: [ { path: '/login', element: <LoginPage />}
    ]
    },

])