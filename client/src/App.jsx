import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar';
import './style.css'
import './index.css'
import {RouterProvider, createBrowserRouter, redirect} from "react-router-dom"
import HomePage from './views/HomePage.jsx'
import Login from './views/Login.jsx'
import Register from './views/Register.jsx'
// import EditImage from './views/editImage.jsx'
// import EditNews from './views/editNews.jsx'
// import Category from './views/category.jsx'
import Layout from './components/Layout.jsx'

const loader = ()=>{
  if(!localStorage.Authorization){
    console.log('mmm');
    return redirect('/login')
  } 
  return null
}
const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
        loader 
      },
      {
        path: "/home",
        element: <HomePage/>, 
        loader
      },
      // {
      //   path: "/editImage/:id",
      //   element: <EditImage/>,
      //   loader
      // },
      // {
      //   path: "/editNews/:id",
      //   element: <EditNews/>, 
      //   loader
      // },
      // {
      //   path: "/addNews",
      //   element: <EditNews/>, 
      //   loader
      // },
      {
        path: "/login",
        element: <Login/>
      },
      // {
      //   path: "/register",
      //   element: <Register/>,
      //   loader
      // },
      // {
      //   path: "/category",
      //   element: <Category/>,
      //   loader
      // }
    ]
  }
])


function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
