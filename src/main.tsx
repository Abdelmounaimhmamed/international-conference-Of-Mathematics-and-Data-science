import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashBoard from './Components/DashBoard.tsx'
import Login from './Components/Login.tsx'
import Profile from './Components/Profile.tsx'
import AdminAbout from './Components/AdminAbout.tsx'
import Partner from './Components/Partner.tsx'
import SpeakersAdmin from './Components/SpeakersAdmin.tsx'
import HeroAdmin from './Components/HeroAdmin.tsx'
import Community from './Components/Community.tsx'
import AnimatedCursor from 'react-animated-cursor';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element : <DashBoard />
  },{
    path: "/profile",
    element: <Profile />
  },
  {
    path : "/AdminAbout",
    element: <AdminAbout />
  },
  {
    path : "/Partner",
    element: <Partner />
  },
  {
    path : "/Speakers",
    element: <SpeakersAdmin />
  },
  {
    path : "/adminHero",
    element: <HeroAdmin />
  },
  {
    path : "/Community",
    element: <Community />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
    <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="28, 97, 157"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
        <RouterProvider router={router} />    
    </NextUIProvider>
  </React.StrictMode>,
)
