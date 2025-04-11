import "./App.css";
import { RouterProvider } from "react-router-dom";
import { getNivelesSuperiores } from "./services/api";
import { useEffect, useState } from "react";
import { normalizeText } from "./components/NormalizeText/NormalizeText";
import router from "./routes";


function App() {
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

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <h1>HOLA A TODOS</h1>
    </>
  );
}

export default App;
