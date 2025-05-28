import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  ServerRouter,
} from "react-router-dom";
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
import Estudiantes from "./pages/Estudiantes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffers, getSchools, getServices } from "./redux/actions/EduActions";
import {
  getFeaturedSports,
  getSports,
  getTalents,
} from "./redux/actions/SportsActions";
import { statusHttp } from "./redux/reducers/EduReducer";
import Trabajadores from "./pages/Trabajadores";
import ModalidadVirtual from "./pages/ModalidadVirtual";
import PSU from "./pages/PSU";
import Tec_Bach_Univ from "./pages/Tec_Bach_Univ";
import Bachillerato from "./pages/Bachillerato";

function App() {
  const dispatch = useDispatch();

  const schoolStatus = useSelector((state) => state.school.schoolsState.status);
  const servicesStatus = useSelector((state) => state.school.servicesState.status);
  const sportsStatus = useSelector((state) => state.sports.sportState.status);
  const offersStatus = useSelector((state) => state.school.servicesState.status)

  useEffect(() => {
    if (schoolStatus === statusHttp.IDLE) {
      dispatch(getSchools());
    }
  }, [dispatch, schoolStatus]);

  useEffect(() => {
    if (servicesStatus === statusHttp.IDLE) {
      dispatch(getServices());
    }
  }, [dispatch, servicesStatus]);

  useEffect(() => {
    if (offersStatus === statusHttp.IDLE) {
      dispatch(getOffers())
    }
  }, [dispatch, offersStatus])

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
      element: <InicioLayout />,
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
          path: "H.C.U",
          element: <HConsejo />,
        },
        {
          path: "Bachilleratos",
          element: <Bachillerato />,
        },
        {
          path: "Tec_Bach_Univ",
          element: <Tec_Bach_Univ />,
        },
        {
          path: "PSU",
          element: <PSU />,
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
          path: "ModalidadVirtual",
          element: <ModalidadVirtual />,
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
          path: "estudiantes",
          element: <Estudiantes />,
        },
        {
          path: "trabajadores",
          element: <Trabajadores />,
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
