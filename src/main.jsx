import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ! router import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderNavbar from "./Components/HeaderNavbar/HeaderNavbar.jsx";
import About from "./Components/LinksOfNavbars/About/About.jsx";
import Services from "./Components/LinksOfNavbars/Services/Services.jsx";
import Contact from "./Components/LinksOfNavbars/Contact/Contact.jsx";
import HeroSection from "./Components/HeroSection/Herosection.jsx";
import Users from "./Components/LinksOfNavbars/Users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderNavbar></HeaderNavbar>,
    children: [
      {
        path: "home",
        element: <HeroSection></HeroSection>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/user",
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
       
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
