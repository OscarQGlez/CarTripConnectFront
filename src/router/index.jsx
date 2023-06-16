import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Root from "../layout";
import NotFound from "../pages/NotFound/NotFound";
import CreateTrips from "../pages/CreateTrips/CreateTrips";
import Signup from "../pages/Signup/Signup";
import LoginPage from "../pages/LoginPage/LoginPage"
import TripDetails from "../pages/TripDetails/TripDetails";
import SearchTrip from "../pages/SearchTrip/SearchTrip";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

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
      { path: "/tripdetail", element: <TripDetails /> },
      { path: "/searchtrip", element: <SearchTrip /> },
      { path: "/profilepage", element: <ProfilePage/> }
    ],
  },
]);
