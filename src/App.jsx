import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioLayout from "./layouts/InicioLayout";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import Conocenos from "./pages/Conocenos";
import { useEffect, useState } from "react";
import axios from "axios";
import Licenciaturas from "./pages/Licenciaturas";
import Posgrados from "./pages/Posgrados";


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
          path: "Inicio",
          element: <Inicio />,
        },
        {
          path: "Conocenos",
          element: <Conocenos />,
        },
        {
          path: "Licenciaturas",
          element: <Licenciaturas />
        },
        {
          path: "Posgrados",
          element: <Posgrados />
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
      "https://strapi.uagro.mx/api/niveles-superiores"
    );
    console.log(response.data.docs);

    setNotas(response.data.docs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
