import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapPin,
} from "react-icons/fa";
import MapFooter from "../MapFooter/MapFooter";

function Footer() {
  return (
    <footer className="text-md bg-[#192a48] text-white flex flex-col justify-between gap-8 p-5 lg:p-10">
      {/* INFORMACION DE CONTACTO */}
      <div className="w-full h-full flex flex-col justify-evenly items-center lg:flex-row gap-8">
        <ul className="space-y-4 text-justify w-full h-full">
          <h2 className="font-semibold text-2xl md:text-3xl">Contacto:</h2>
          <li>
            <FaMapPin className="inline-block mr-2 text-red-500" />
            Av. Javier Méndez Aponte 1 Fracc. Servidor Agrario C.P. 39070
            Chilpancingo de los Bravo, Gro.
          </li>
          <li>
            <FaEnvelope className="inline-block mr-2" />
            Email: rectoria@uagro.mx
          </li>
          <li>
            <FaPhone className="inline-block mr-2" />
            01(747) 471-93-10 Ext. 3000
          </li>
        </ul>

        <div className="w-full h-full lg:w-5xl flex justify-center items-center">
          <MapFooter address="Rectoría | UAGro" />
        </div>
      </div>

      {/* INFORMACION DE REDES SOCIALES */}
      <div className="w-full h-full flex flex-col justify-center items-start">
        <h2 className="font-semibold text-2xl md:text-3xl mb-4">Síguenos:</h2>
        <ul className="w-full lg:w-1/2 flex justify-between items-center">
          <li className="flex items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="inline-block mr-2 text-xl hover:text-blue-500" />
              <span className="hidden lg:inline">Facebook</span>
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="inline-block mr-2 text-xl hover:text-pink-500" />
              <span className="hidden lg:inline">Instagram</span>
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png"
                alt="X Logo"
                width="17"
                className="inline-block mr-2"
              />
              <span className="hidden lg:inline">(Twitter)</span>
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="inline-block mr-2 text-xl hover:text-red-500" />
              <span className="hidden lg:inline">Youtube</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
