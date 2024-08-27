
import DefaultLayout from "@/layout/DefaultLayout";

import { createBrowserRouter } from "react-router-dom";
import App from './../../App';
import RootLayout from "@/layout/RootLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegistrationPage from "@/pages/auth/RegistrationPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: 
       <RootLayout/>
      ,
      children : [
        {
          index: true ,
          element: <App/>
        }
      ]
    },
    {
      path: "/auth",
      children : [
        {
          path: "login",
    
          element: <LoginPage/>,
        },
        {
          path: "register",
    
          element: <RegistrationPage/>,
        }
      ]
    },
    {
        path: "/dashboard",
  
        element: <DefaultLayout/>,
      }
  ]);
  
  export default router;