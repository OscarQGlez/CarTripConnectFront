import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Root from "../layout";
import NotFound from "../pages/NotFound/NotFound";
import CreateTrips from "../pages/CreateTrips/CreateTrips";
import Signup from "../pages/Signup/Signup";
import LoginPage from "../pages/LoginPage/LoginPage"

export const router = createBrowserRouter([
  // { path: '/', element: <App/>}
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,

    children: [
      { path: "/newtrip", element: <CreateTrips /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);
