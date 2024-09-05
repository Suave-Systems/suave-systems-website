import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/Services";
import Contact from "../pages/Contact";
import AboutUsComingSoon from "../components/comingsoon/AboutUsComingSoon";
import ServicesComingSoon from "../components/comingsoon/ServicesComingSoon";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUsComingSoon />,
  },
  {
    path: "/services",
    element: <ServicesComingSoon />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  
       
];
