import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import Conocenos from "./pages/Conocenos";
import Licenciaturas from "./pages/Licenciaturas";
import Posgrados from "./pages/Posgrados";
import HConsejo from "./pages/HConsejo";
import AdministracionCentral from "./pages/AdministracionCentral";
import ValoresUagro from "./pages/ValoresUagro";
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";


const router = createBrowserRouter([
  {
    path: "/frontend",
    element: <Root />, // Usamos el nuevo componente Root en lugar de InicioLayout directamente
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
        element: <Licenciaturas />,
      },
      {
        path: "Posgrados",
        element: <Posgrados />,
      },
      {
        path: "HConsejoUniversitario",
        element: <HConsejo />,
      },
      {
        path: "AdministracionCentral",
        element: <AdministracionCentral />,
      },
      {
        path: "ValoresUagro",
        element: <ValoresUagro />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router