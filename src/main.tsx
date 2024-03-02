import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewElement from "./newProject"
import Home from "./home"
import Projects from "./projects"
import EditProjects from "./edit"
import DeleteProject from "./delete"
import AlterProject from "./update"

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/novo-projecto', element: <NewElement/>},
      {path: '/', element: <Home/>},
      {path: '/meus-projectos', element: <Projects/>},
      {path: '/editar-projecto', element: <EditProjects/>},
      {path: '/deletar-projecto', element: <DeleteProject/>},      
      {path: '/alterar-projecto', element: <AlterProject/>}
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
