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

function EducationalOffer() {
  const [escuelas, setEscuelas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.uagro.mx/api/niveles-superiores"
        );
        setEscuelas(response.data.docs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full h-full p-12">
      {escuelas.map((escuela) => (
        <div
          key={escuela._id}
          className="w-full h-full shadow-2xl rounded-2xl p-6 mb-6 flex flex-col items-center md:flex-row md:items-start"
        >
          {/* Seccion de la lista de licenciaturas */}
          <div className="px-4 py-4 h-full w-2/5">
            {/* Titulo */}
            <h3 className="text-black text-2xl font-bold pb-3 flex items-center">
              {escuela.nivelSuperior}
              <FaGraduationCap className="inline-block ml-2" />
            </h3>
            <h4 className="text-2xl font-semibold">Programa Educativo</h4>

            {/* Campo para mostrar lista de licenciaturas  */}
            {escuela.licenciaturas?.map((licenciatura, index) => (
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
              src={escuela.imagen.url}
              alt={escuela.nombre}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Información de contacto - Escuelas */}
          <div className="md:ml-6 h-full w-full px-2 flex-1 text-center md:text-left space-y-2">
            <h2 className="text-xl font-bold flex justify-start items-center">
              Contacto
              <FaAddressBook className="inline-block ml-2" />
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <a
                  href={`https://${escuela.contacto["sitio web"]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="mr-2 inline-block" />
                  {escuela.contacto.sitioWeb}
                </a>
              </li>

              <li className="flex items-center">
                <a href={`tel:${escuela.contacto.telefono}`}>
                  <FaPhone className="mr-2 inline-block" />
                  {escuela.contacto.telefono}
                </a>
              </li>

              <li className="flex items-center">
                <a href={`mailto:${escuela.contacto.email}`}>
                  <FaEnvelope className="mr-2 inline-block" />
                  {escuela.contacto.email}
                </a>
              </li>

              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2 inline-block" />
                {escuela.contacto.direccion}
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
              <MapFooter address={escuela.ubicacion} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationalOffer
