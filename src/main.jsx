import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './components/Home.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home,
        loader:()=>fetch("http://localhost:5000/coffees")
      },
        
      {
        path:"/addCoffee",
        Component:AddCoffee
      },
      {
        path:"/coffee/:id",
        Component:CoffeeDetails
      },
      {
        path:"/updateCoffee/:id",
        Component:UpdateCoffee,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:"signIn",
        Component:SignIn
      },
      {
        path:"signUp",
        Component:SignUp
      },
      {
        path:"users",
        Component:Users,
        loader:()=>fetch("http://localhost:5000/users")
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
