import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Navbar1 from "../Pages/Shared/Navbar/Navbar1";
import RegularPage from "../Pages/RegularPage/RegularPage";
import BusinessPage from "../Pages/BusinessPage/BusinessPage";
import InternationalPage from "../Pages/InternationalPage/InternationalPage";
import SportsPage from "../Pages/SportsPage/SportsPage";
import EntertainmentPage from "../Pages/EntertainmentPage/EntertainmentPage";
import CulturePage from "../Pages/CulturePage/CulturePage";
import ArtsPage from "../Pages/ArtsPage/ArtsPage";
import FashionPage from "../Pages/FashionPage/FashionPage";
import TechnologyPage from "../Pages/TechnologyPage/TechnologyPage";
import LifeHackpage from "../Pages/LifeHackPage/LifeHackpage";
import TravelPage from "../Pages/TravelPage/TravelPage";
import ContactUs from "../Pages/Contact/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import BookMarked from "../Pages/Dashboard/BookMarked";
import Profile from "../Pages/Dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/regular',
        element:<RegularPage/>
      },{
        path:'/business',
        element:<BusinessPage></BusinessPage>
      },
      {
        path:"/international",
        element:<InternationalPage></InternationalPage>
      },
      {
        path:"/sports",
        element:<SportsPage/>
      },
      {
        path:"/entertainment",
        element:<EntertainmentPage/>
      },
      {
        path:"/culture",
        element:<CulturePage/>
      },
      {
        path:"/arts",
        element:<ArtsPage/>
      },
      {
        path:"/fashion",
        element:<FashionPage/>
      },
      {
        path:"/technology",
        element:<TechnologyPage/>
      },
      {
        path:"/lifehacks",
        element:<LifeHackpage/>
      },
      {
        path:"/travel",
        element:<TravelPage/>
      },
      {
        path:"nav",
        element:<Navbar1/>
      },
      {
        path: "/news/:cat/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
          {
            index:true,
            element:<BookMarked></BookMarked>
          },
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      }
    ],
  },
]);

export default router;
