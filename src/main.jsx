/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Users from './components/Users/Users.jsx'
import Userdetail from './components/UserDetail/Userdetail.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetail from './components/PostDetail/PostDetail.jsx'
import Error from './components/Error/Error.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>,
    children: [
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      
      {
        path: 'users',
        element: <Users/>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'users/user/:id',
        element: <Userdetail/>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path: 'posts',
        element: <Posts/>,
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      {
        path: 'posts/post/:id',
        element: <PostDetail/>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      }


    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
