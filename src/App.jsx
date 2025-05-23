import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioLayout from "./layouts/InicioLayout";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import Conocenos from "./pages/Conocenos";
import Licenciaturas from "./pages/Licenciaturas";
import Posgrados from "./pages/Posgrados";
import HConsejo from "./pages/HConsejo";
import AdministracionCentral from "./pages/AdministracionCentral";
import ValoresUagro from "./pages/ValoresUagro";
import Deportes from "./pages/Deportes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchools, getServices } from "./redux/actions/EduActions";
import {
  getFeaturedSports,
  getSports,
  getTalents,
} from "./redux/actions/SportsActions";
import { statusHttp } from "./redux/reducers/EduReducer";

function App() {
  const dispatch = useDispatch();

  const schoolStatus = useSelector((state) => state.school.schoolsState.status);
  const sportsStatus = useSelector((state) => state.sports.sportState.status);

  useEffect(() => {
    if (schoolStatus === statusHttp.IDLE) {
      dispatch(getSchools());
      dispatch(getServices());
    }
  }, [dispatch, schoolStatus]);

  useEffect(() => {
    if (sportsStatus === statusHttp.IDLE) {
      dispatch(getSports());
      dispatch(getTalents());
      dispatch(getFeaturedSports());
    }
  }, [dispatch, sportsStatus]);

  const router = createBrowserRouter([
    {
      path: "/frontend",
      element: <InicioLayout />, // Usamos el nuevo componente Root en lugar de InicioLayout directamente
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
        {
          path: "deportes",
          element: <Deportes />,
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
