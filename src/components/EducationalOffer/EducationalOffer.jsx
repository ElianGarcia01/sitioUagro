import { useEffect, useState } from "react";
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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {getNivelesSuperiores} from  "../../services/api"

function EducationalOffer() {
  const [schools, setSchools] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [regionValue, setRegionValue] = useState("");
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);
  const [uniquesRegions, setUniquesRegions] = useState([]); // Estado para las regiones únicas

  const handleChangeSearch = (event) => {
    setSearchInput(event.target.value);
    setHasSearched(true);
  };

  const handleChangeCheckbox = (event) => {
    setRegionValue(event.target.value);
  };

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

  ///////////////////////// RETORNO DE CONTENIDO JSX ////////////////////////////
  return (
    <div className="w-full h-full px-4 md:px-12 py-2">
      {/* Contenedor del filtrado por regiones con scroll horizontal */}
      <div className="w-full py-4 overflow-x-auto">
        <div className="min-h-full flex justify-center items-center space-x-2 py-2 w-max min-w-full">
          {/* Botón "Todas" */}
          {uniquesRegions.length === 0 ? (
            <Skeleton height={40} width={100} />
          ) : (
            <button
              className={`font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors text-sm md:text-base whitespace-nowrap ${
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

          {/* Botones de regiones */}
          {uniquesRegions.length === 0
            ? [...Array(7)].map((_, index) => (
                <Skeleton key={index} height={40} width={100} />
              ))
            : uniquesRegions.map((region) => (
                <button
                  className={`font-semibold px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm md:text-base whitespace-nowrap ${
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
      </div>

      {/* Barra de búsqueda - Responsiva */}
      <div className="relative w-full md:max-w-lg mx-auto my-4 md:my-8 shadow-2xl">
        <div className="flex items-center border-2 border-gray-300 rounded-full px-4 md:px-5 py-2 md:py-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 focus-within:border-blue-900 focus-within:ring-2 focus-within:ring-blue-900">
          <FiSearch className="text-gray-500 mr-2 md:mr-3" size={18} />
          <input
            type="text"
            placeholder="Buscar escuelas..."
            className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent text-sm md:text-base"
            value={searchInput}
            onChange={handleChangeSearch}
          />
        </div>
      </div>

      {/* Mensaje cuando no hay resultados */}
      {!loading && hasSearched && filteredSchools.length === 0 && (
        <div className="text-center my-8">
          <p className="text-lg md:text-xl text-gray-500">
            No se encontraron resultados, intenta con otra búsqueda.
            <FaRegFrown size={24} className="text-gray-500 inline-block ml-2" />
          </p>
        </div>
      )}

      {/* Skeletons de carga */}
      {loading ? (
        <div className="space-y-6 mt-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 md:gap-6 p-4"
            >
              <Skeleton circle={true} height={48} width={48} />
              <div className="flex-1 space-y-3">
                <Skeleton height={24} width="60%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={16} count={3} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        filteredSchools.map((school) => (
          <div key={school._id} className="w-full mb-6">
            <div className="w-full shadow-2xl rounded-2xl p-4 md:p-6 flex flex-col md:flex-row">
              {/* Sección de licenciaturas - Responsiva */}
              <div className="w-full md:w-2/5 inline-block px-2 py-2 md:px-4 md:py-4 order-1 md:order-none flex-wrap">
                <div className="flex justify-start items-center">
                  <h3 className="text-black text-xl md:text-2xl font-bold pb-2 leading-tight">
                    {school.nivelSuperior}
                  </h3>
                  <FaGraduationCap className="ml-2" size={24} />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Programa Educativo
                </h4>
                <div className="space-y-1 mb-4">
                  {school.licenciaturas?.map((licenciatura, index) => (
                    <div key={index} className="flex items-baseline">
                      <FaCircle className="mr-2 text-black" size={8} />
                      <span className="text-black text-sm md:text-base">
                        {licenciatura.nombre}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Botones para compartir */}
                <div className="flex flex-col space-y-3 justify-center items-center lg:justify-start lg:items-start">
                  <ButtonCartel />
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <h3 className="text-lg md:text-xl font-semibold">
                      Compartir:
                    </h3>
                    <div className="flex gap-2">
                      <ShareButtonF
                        url="https://dgtidweb.uagro.mx/ejemplo/OfertaSuperior/CIENCIAS_ECONOMICAS.pdf"
                        title="Oferta Educativa Especial"
                        size={24}
                      />
                      <ShareButtonW
                        url="https://dgtidweb.uagro.mx/ejemplo/OfertaSuperior/CIENCIAS_ECONOMICAS.pdf"
                        title="Oferta Educativa Especial"
                        size={24}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo - Responsivo */}
              <div className="w-full md:w-24 md:h-24 lg:w-48 lg:h-48 flex-shrink-0 order-2 md:order-none flex justify-center mb-4 md:mb-0 lg:mt-8">
                <LazyLoadImage
                  src={school.imagen.url}
                  alt={school.nombre}
                  className="w-42 h-42 md:w-full md:h-full object-contain"
                />
              </div>

              {/* Información de contacto - Responsiva */}
              <div className="w-full md:flex-1 px-2 py-2 md:ml-4 order-3 md:order-none flex flex-col justify-start items-start">
                <h2 className="text-lg md:text-xl font-bold text-center inline-block items-center mb-2 min-w-full">
                  Contacto
                  <FaAddressBook className="ml-2 inline-block" size={18} />
                </h2>
                <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                  <li className="flex items-start md:items-center">
                    <FaGlobe
                      className="mr-2 mt-1 md:mt-0 flex-shrink-0"
                      size={14}
                    />
                    <a
                      href={`https://${school.contacto["sitio web"]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all"
                    >
                      {school.contacto.sitioWeb}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaPhone className="mr-2 flex-shrink-0" size={14} />
                    <a href={`tel:${school.contacto.telefono}`}>
                      {school.contacto.telefono}
                    </a>
                  </li>
                  <li className="flex items-start md:items-center">
                    <FaEnvelope
                      className="mr-2 mt-1 md:mt-0 flex-shrink-0"
                      size={14}
                    />
                    <a
                      href={`mailto:${school.contacto.email}`}
                      className="break-all"
                    >
                      {school.contacto.email}
                    </a>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkedAlt
                      className="mr-2 mt-1 flex-shrink-0"
                      size={14}
                    />
                    <span>{school.contacto.direccion}</span>
                  </li>
                </ul>

                {/* Redes sociales */}
                <div className="flex space-x-3 mt-3">
                  <a href="#" className="text-blue-600">
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://brandlogos.net/wp-content/uploads/2023/07/x__twitter-logo_brandlogos.net_fxbde.png"
                      alt="X Logo"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>

              {/* Mapa - Responsivo */}
              <div className="w-full md:w-1/5 order-4 mt-4 md:mt-0 flex flex-col justify-start py-2 items-center">
                <h2 className="text-lg md:text-xl font-bold flex items-center justify-center md:justify-start mb-2">
                  Ubicación
                  <FaLocationDot className="ml-2" size={18} />
                </h2>
                <div className="w-full h-40 md:h-48">
                  <MapFooter address={school.ubicacion} />
                </div>
                <h3 className="text-center md:text-left mt-4 text-sm md:text-base">
                  Región:{" "}
                  <span className="text-red-500">{school.region.nombre}</span>
                </h3>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default EducationalOffer;
