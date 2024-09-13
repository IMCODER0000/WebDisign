import React from "react";
import { useRoutes } from "react-router-dom";
import StartPage from "./StartPage";
import MainPage from "./MainPage";
import Login from "./Login";
import Join from "./Join";



const Routes = () => {
  let element = useRoutes([
    { path: "/", element: <StartPage /> },

    {
      path: "/main", 
      element: <MainPage />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/join",
      element: <Join />,
    },
   
    
  ]);

  return element;
};


export default Routes;
