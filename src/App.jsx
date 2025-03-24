import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import InicioLayout from './layouts/InicioLayout'
import Inicio from './pages/Inicio'
import NotFound from './pages/NotFound'
import Conocenos from "./pages/Conocenos"


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
        {
          path: "conocenos",
          element: <Conocenos />
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
