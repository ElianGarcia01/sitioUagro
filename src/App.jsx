import "./App.css";
<<<<<<< HEAD
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
import Deportes from "./pages/Deportes";
=======
import { RouterProvider } from "react-router-dom";
import { getNivelesSuperiores } from "./services/api";
import { useEffect, useState } from "react";
import { normalizeText } from "./components/NormalizeText/NormalizeText";
import router from "./routes";
>>>>>>> 277c96d0c09468eb9a4a1eb6b8ac691533ae11d0


function App() {
<<<<<<< HEAD
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
        {
          path: "deportes",
          element: <Deportes />
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
=======
  const [searchInput, setSearchInput] = useState("");
  const [regionValue, setRegionValue] = useState("");
  const [uniquesRegions, setUniquesRegions] = useState([]); // Estado para las regiones únicas
  const [loading, setLoading] = useState(true);
  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getNivelesSuperiores();
        console.log(response);

        const schoolData = response.data.docs.reverse();
        setSchools(schoolData);

        const regions = Array.from(
          new Set(
            schoolData.map((school) => school.region?.nombre).filter(Boolean)
          )
        );
        setUniquesRegions(regions);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    setFilteredSchools(
      schools.filter((school) => {
        const matchingInputSearch = normalizeText(
          school.nivelSuperior
        ).includes(normalizeText(searchInput));
        const matchingButtonRegion =
          regionValue == "" || school.region.nombre == regionValue;
        return matchingInputSearch && matchingButtonRegion;
      })
    );
  }, [searchInput, schools, regionValue]);
>>>>>>> 277c96d0c09468eb9a4a1eb6b8ac691533ae11d0

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <h1>HOLA A TODOS</h1>
    </>
  );
}

export default App;
