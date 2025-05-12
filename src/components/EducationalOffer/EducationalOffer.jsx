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
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { changeRegion, changeSearch } from "../../redux/actions/EduActions";
import { statusHttp } from "../../redux/reducers/EduReducer";
import { useMemo } from "react";

function EducationalOffer() {
  const dispatch = useDispatch();
  const { schoolsState, region, search } = useSelector((state) => state.school);
  const { schools, status } = schoolsState;

  const uniquesRegions = useMemo(() => {
    const regionesSet = new Set(
      schools.map((s) => s.region?.nombre || "Sin región")
    );
    return [...regionesSet].sort();
  }, [schools]);

  const filteredSchools = useMemo(() => {
    return schools.filter((school) => {
      const matchSearch = normalizeText(school.nivelSuperior).includes(
        normalizeText(search)
      );
      const matchRegion =
        region === "Todas" || region === "" || school.region?.nombre === region;
      return matchSearch && matchRegion;
    });
  }, [schools, region, search]);

  return (
    <div className="w-full h-full px-4 md:px-12 py-2">
      {/* Regiones */}
      <div className="w-full py-4 overflow-x-auto">
        <div className="min-h-full flex justify-center items-center space-x-2 py-2 w-max min-w-full">
          {(uniquesRegions.length === 0
            ? Array(8).fill(null) // Mostrar 7 skeletons
            : ["Todas", ...uniquesRegions]
          ).map((reg, i) =>
            uniquesRegions.length === 0 ? (
              <Skeleton key={i} height={40} width={100} />
            ) : (
              <button
                key={reg}
                value={reg}
                onClick={(e) => dispatch(changeRegion(e.target.value))}
                className={`font-semibold px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm md:text-base whitespace-nowrap ${
                  region === reg
                    ? "bg-gray-100 text-gray-800 shadow-md"
                    : "bg-gray-300 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {reg}
              </button>
            )
          )}
        </div>
      </div>

      {/* Buscador */}
      <div className="relative w-full md:max-w-lg mx-auto my-4 md:my-8 shadow-2xl">
        <div className="flex items-center border-2 border-gray-300 rounded-full px-4 md:px-5 py-2 md:py-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 focus-within:border-blue-900 focus-within:ring-2 focus-within:ring-blue-900">
          <FiSearch className="text-gray-500 mr-2 md:mr-3" size={18} />
          <input
            type="text"
            placeholder="Buscar escuelas..."
            className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent text-sm md:text-base"
            value={search}
            onChange={(e) => dispatch(changeSearch(e.target.value))}
          />
        </div>
      </div>

      {/* Resultados */}
      {status === statusHttp.PENDING ? (
        <div className="space-y-6 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 md:gap-6 p-4"
            >
              <Skeleton circle height={48} width={48} />
              <div className="flex-1 space-y-3">
                <Skeleton height={24} width="60%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={16} count={3} />
              </div>
            </div>
          ))}
        </div>
      ) : filteredSchools.length === 0 ? (
        // Muestra el mensaje cuando no hay resultados
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <FaRegFrown size={48} className="text-gray-500 mb-4" />
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            No se encontraron resultados para tu búsqueda.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Intenta con otro término o selecciona otra región.
          </p>
        </div>
      ) : (
        filteredSchools.map((school) => (
          <div key={school._id} className="w-full mb-6">
            <div className="w-full shadow-2xl rounded-2xl p-4 md:p-6 flex flex-col md:flex-row">
              {/* Licenciaturas */}
              <div className="w-full md:w-2/5 px-2 py-2 md:px-4 md:py-4">
                <div className="flex items-center">
                  <h3 className="text-black text-xl md:text-2xl font-bold leading-tight">
                    {school.nivelSuperior}
                  </h3>
                  <FaGraduationCap className="ml-2" size={24} />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Programa Educativo
                </h4>
                <div className="space-y-1 mb-4">
                  {school.licenciaturas?.map((lic, i) => (
                    <div key={i} className="flex items-baseline">
                      <FaCircle className="mr-2 text-black" size={8} />
                      <span className="text-black text-sm md:text-base">
                        {lic.nombre}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-3 items-center md:items-start">
                  <ButtonCartel />
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-center">
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

              {/* Imagen */}
              <div className="w-full md:w-24 md:h-24 lg:w-48 lg:h-48 flex-shrink-0 flex justify-center mb-4 md:mb-0 lg:mt-8">
                <LazyLoadImage
                  src={school.imagen.url}
                  alt={school.nombre}
                  className="w-44 h-44 md:w-full md:h-full object-contain"
                  placeholder={
                    <div className="flex justify-center items-center w-full h-full">
                      <ClipLoader color="#1e3a8a" size={40} />
                    </div>
                  }
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
