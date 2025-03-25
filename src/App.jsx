import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioLayout from "./layouts/InicioLayout";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import Conocenos from "./pages/Conocenos";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <InicioLayout />,
      children: [
        {
          path: "",
          element: <Inicio />,
        },
        {
          path: "inicio",
          element: <Inicio />,
        },
        {
          path: "conocenos",
          element: <Conocenos />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  const [notas, setNotas] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://strapi.uagro.mx/api/NivelesSuperiores"
    );
    console.log(response.data);

    setNotas(response.data);
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
