import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import InicioLayout from './layouts/InicioLayout'
import Inicio from './pages/Inicio'
import NotFound from './pages/NotFound'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <InicioLayout />,
      children: [
        {
          path: "",
          element: <Inicio />
        },
        {
          path: "inicio",
          element: <Inicio />
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    },
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
