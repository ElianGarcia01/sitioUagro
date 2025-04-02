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
import { FaCircle, FaGlobe, FaMapMarkedAlt, FaRegFrown } from "react-icons/fa";
import ButtonCartel from "../ButtonCartel/ButtonCartel";
import ShareButtonF from "../ShareButton/ShareButtonF";
import ShareButtonW from "../ShareButton/ShareButtonW";
import { FiSearch } from "react-icons/fi";
import { normalizeText } from "../normalizeText/normalizeText";
import PromotionalVideo from "../PromotionalVideo/PromotionalVideo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function EducationalOffer() {
  const [schools, setSchools] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [regionValue, setRegionValue] = useState("");
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga para la API
  const [hasSearched, setHasSearched] = useState(false); // Nuevo estado para saber si se ha buscado algo

  const handleChangeSearch = (event) => {
    setSearchInput(event.target.value);
    setHasSearched(true); // Marcamos que se está buscando
  }

  const handleChangeCheckbox = (event) => {
    setRegionValue(event.target.value);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.uagro.mx/api/niveles-superiores?limit=100"
        );
        setSchools(response.data.docs.reverse());
        setLoading(false); // Terminamos de cargar los datos
      } catch (error) {
        console.error("Error fetching data:", error);
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

  const uniquesRegions = Array.from(
    new Set(schools.map((school) => school.region?.nombre).filter(Boolean))    
  );

  console.log(uniquesRegions)

  return (
    <div className="w-full h-full px-12 py-2">
      {/* Contenedor del filtrado por regiones */}
      <div className="w-full h-full space-x-2 flex justify-center items-center">
        {/* Skeleton para el botón "Todas" */}
        {uniquesRegions.length === 0 ? (
          <Skeleton height={40} width={100} />
        ) : (
          <button
            className={`font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors ${
              regionValue === ""
                ? "bg-gray-100 text-gray-800 shadow-md"
                : "bg-gray-300 hover:bg-gray-200 text-gray-800"
            }`}
            value=""
            onClick={handleChangeCheckbox}
          >
            Todas
          </button>
        )}

        {/* Skeletons para las regiones */}
        {uniquesRegions.length === 0
          ? [...Array(uniquesRegions.length || 7)].map((_, index) => (
              <Skeleton key={index} height={40} width={100} />
            ))
          : uniquesRegions.map((region) => (
              <button
                className={`font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                  regionValue === region
                    ? "bg-gray-100 text-gray-800 shadow-md"
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
        <div className="flex items-center border-2 border-gray-300 rounded-full px-5 py-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 focus-within:border-blue-900 focus-within:ring-2 focus-within:ring-blue-900">
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

      {/* Verifica si hay escuelas filtradas y muestra el mensaje si no hay resultados */}
      {!loading && hasSearched && filteredSchools.length === 0 && (
        <div className="text-center my-8">
          <p className="text-xl text-gray-500">
            No se encontraron resultados, intenta con otra búsqueda.
            <FaRegFrown size={30} className="text-gray-500 inline-block ml-2" />
          </p>
        </div>
      )}

      {/* Skeletons mientras cargan los datos */}
      {loading ? (
        <>
          <div className="space-y-6 mt-6">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex gap-6">
                <Skeleton circle={true} height={48} width={48} />
                <div className="flex-1 space-y-4">
                  <Skeleton height={24} width="60%" />
                  <Skeleton height={20} width="50%" />
                  <Skeleton height={40} />
                  <Skeleton height={40} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        filteredSchools.map((school) => (
          <div key={school._id}>
            {school.region.videoPromocional && (
              <PromotionalVideo videoUrl={school.region.videoPromocional} />
            )}
            <div className="w-full h-full shadow-2xl rounded-2xl p-6 mb-6 flex flex-col items-center md:flex-row md:items-start">
              {/* Lista de licenciaturas */}
              <div className="px-4 py-4 h-full w-2/5">
                <h3 className="text-black text-2xl gap-2 font-bold pb-3 flex justify-start items-center">
                  {school.nivelSuperior}
                  <FaGraduationCap />
                </h3>
                <h4 className="text-2xl font-semibold">Programa Educativo</h4>
                {school.licenciaturas?.map((licenciatura, index) => (
                  <div key={index} className="flex items-baseline my-2">
                    <FaCircle className="mr-2 text-black" size={9} />
                    <span className="text-black text-md">
                      {licenciatura.nombre}
                    </span>
                  </div>
                ))}
                <div className="flex flex-col justify-center items-start w-full h-full">
                  <ButtonCartel />

                  {/* Botones para compartir */}

                  <div className="flex justify-start items-center gap-2 w-full mt-3">
                    <h3 className="text-2xl font-semibold">Compartir en:</h3>
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
                <LazyLoadImage
                  src={school.imagen.url}
                  alt={school.nombre}
                  className="w-full h-full object-cover"
                  
                />
              </div>

              {/* Información de contacto */}
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
                <h3 className="text-xl  font-normal mt-8">
                  Region: <span className="text-red-500">{school.region.nombre}</span>{" "}
                </h3>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default EducationalOffer
