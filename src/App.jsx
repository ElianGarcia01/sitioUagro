import "./App.css";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import InicioLayout from "./layouts/InicioLayout";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import Conocenos from "./pages/Conocenos";
import Licenciaturas from "./pages/Licenciaturas";
import Posgrados from "./pages/Posgrados";
import HConsejo from "./pages/HConsejo";
import AdministracionCentral from "./pages/AdministracionCentral";
import ValoresUagro from "./pages/ValoresUagro";

// Creamos un componente de layout que incluye el ScrollRestoration
function Root() {
  return (
    <>
      <ScrollRestoration />
      <InicioLayout />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/frontend",
      element: <Root />,  // Usamos el nuevo componente Root en lugar de InicioLayout directamente
      children: [
        {
          path: "",
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
        {
          path: "HConsejoUniversitario",
          element: <HConsejo />
        },
        {
          path: "AdministracionCentral",
          element: <AdministracionCentral />
        },
        {
          path: "ValoresUagro",
          element: <ValoresUagro />
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;