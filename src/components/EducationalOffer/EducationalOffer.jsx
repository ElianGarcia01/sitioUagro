import { useEffect, useState } from "react";
import axios from "axios";
import MapFooter from "../MapFooter/MapFooter";
import {
  FaAddressBook,
  FaEnvelope,
  FaFacebook,
  FaGraduationCap,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { FaCircle, FaGlobe, FaMapMarkedAlt } from "react-icons/fa";
import ButtonCartel from "../ButtonCartel/ButtonCartel";
import ShareButtonF from "../ShareButton/ShareButtonF";
import ShareButtonW from "../ShareButton/ShareButtonW";
import { FiSearch } from "react-icons/fi";
import { normalizeText } from "../normalizeText/normalizeText";

function EducationalOffer() {
  // Estado para manejar el arreglo de escuelas en la solicitud a la API
  const [schools, setSchools] = useState([]);

  // Estado para manejar el valor del input
  const [searchInput, setSearchInput] = useState("");

  // Funcioon para cambiar le valor del input por el texto que fue ingresado
  const handleChangeSearch = (event) => {
    setSearchInput(event.target.value);
  };

  // Estado para cambiar el valor del boton de regiones
  const [regionValue, setRegionValue] = useState("");

  // Funcion para cambiar los valores de los botones
  const handleChangeCheckbox = (event) => {
    setRegionValue(event.target.value);
  };

  // Estado para renderizar nuevas escuelas filtradas
  const [filteredSchools, setFilteredSchools] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.uagro.mx/api/niveles-superiores"
        );
        setSchools(response.data.docs);
      } catch (error) {
        console.error("Error fetching data:", error);
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
          regionValue == "" || school.region == regionValue;
        return matchingInputSearch && matchingButtonRegion;
      })
    );
  }, [searchInput, schools, regionValue]);

  // New Set para filtrar regiones unicas
  const uniquesRegions = Array.from(
    new Set(schools.map((school) => school.region))
  ).reverse();

  return (
    <div className="w-full h-full p-12">
      
      {/* Filtrado por regiones */}
      <div className="w-full h-full space-x-2">
        <button
          className={`font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors ${
            regionValue === ""
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-300 hover:bg-gray-200 text-gray-800"
          }`}
          value=""
          onClick={handleChangeCheckbox}
        >
          Todas
        </button>

        {uniquesRegions.map((region) => (
          <button
            className={`font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors ${
              regionValue === region
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-300 hover:bg-gray-200 text-gray-800"
            }`}
            key={region}
            value={region}
            onClick={handleChangeCheckbox}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Filtro de escuelas por busqueda de texto */}
      <div className="relative max-w-lg mx-auto my-8 w-full shadow-2xl">
        <div className="flex items-center border-2 border-gray-300 rounded-full px-5 py-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300">
          <FiSearch className="text-gray-500 mr-3" size={20} />
          <input
            type="text"
            placeholder="Search for a city..."
            className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent"
            value={searchInput}
            onChange={handleChangeSearch}
          />
        </div>
      </div>

      {filteredSchools.map((school) => (
        <div
          key={school._id}
          className="w-full h-full shadow-2xl rounded-2xl p-6 mb-6 flex flex-col items-center md:flex-row md:items-start"
        >
          {/* Seccion de la lista de licenciaturas */}
          <div className="px-4 py-4 h-full w-2/5">
            {/* Titulo */}
            <h3 className="text-black text-2xl font-bold pb-3 flex items-center">
              {school.nivelSuperior}
              <FaGraduationCap className="inline-block ml-2" />
            </h3>
            <h4 className="text-2xl font-semibold">Programa Educativo</h4>

            {/* Campo para mostrar lista de licenciaturas  */}
            {school.licenciaturas?.map((licenciatura, index) => (
              <div key={index} className="flex items-baseline my-2">
                <FaCircle className="mr-2 text-black" size={9} />
                <span className="text-black text-md">
                  {licenciatura.nombre}
                </span>
              </div>
            ))}

            {/* Seccion de botones para compartir */}

            <div className="flex flex-col justify-center items-start w-full h-full">
              <ButtonCartel />
              <h3 className="text-2xl font-semibold mt-3">Compartir en:</h3>

              <div className="flex justify-center items-center gap-2">
                <ShareButtonF
                  url="https://dgtidweb.uagro.mx/ejemplo/OfertaSuperior/CIENCIAS_ECONOMICAS.pdf"
                  title="Oferta Educativa Especial"
                />
                <ShareButtonW
                  url="https://dgtidweb.uagro.mx/ejemplo/OfertaSuperior/CIENCIAS_ECONOMICAS.pdf"
                  title="Oferta Educativa Especial"
                />
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="w-24 h-24 lg:w-48 lg:h-48 flex-shrink-0">
            <img
              src={school.imagen.url}
              alt={school.nombre}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Información de contacto - escuelas */}
          <div className="md:ml-6 h-full w-full px-2 flex-1 text-center md:text-left space-y-2">
            <h2 className="text-xl font-bold flex justify-start items-center">
              Contacto
              <FaAddressBook className="inline-block ml-2" />
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <a
                  href={`https://${school.contacto["sitio web"]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="mr-2 inline-block" />
                  {school.contacto.sitioWeb}
                </a>
              </li>

              <li className="flex items-center">
                <a href={`tel:${school.contacto.telefono}`}>
                  <FaPhone className="mr-2 inline-block" />
                  {school.contacto.telefono}
                </a>
              </li>

              <li className="flex items-center">
                <a href={`mailto:${school.contacto.email}`}>
                  <FaEnvelope className="mr-2 inline-block" />
                  {school.contacto.email}
                </a>
              </li>

              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2 inline-block" />
                {school.contacto.direccion}
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="flex space-x-4 mt-2 justify-center lg:justify-start items-center">
              <a href="#" className="text-blue-600">
                <FaFacebook className="inline-block mr-0 text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://brandlogos.net/wp-content/uploads/2023/07/x__twitter-logo_brandlogos.net_fxbde.png"
                  alt="X Logo"
                  width="17"
                  className="inline-block mr-0 w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-1/5 h-full text-center">
            <h2 className="text-xl font-bold flex justify-center items-center mb-2">
              Ubicación
              <FaLocationDot className="inline-block ml-2" />
            </h2>
            <div className="w-full h-48">
              <MapFooter address={school.ubicacion} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationalOffer;
