import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaUserGraduate,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FaCircleUser, FaUserGear, FaUserPen } from "react-icons/fa6";
import "../Header/Header.css";

// ARREGLO DE OBJETOS, RUTAS
const routes = [
  { path: "/", name: "Inicio" },
  { path: "Conocenos", name: "Conocenos" },
  { path: "HConsejoUniversitario", name: "H. Consejo Universitario" },
  {
    path: "OfertaEducativa",
    name: "Oferta Educativa",
    submenu: [
      { path: "Licenciaturas", name: "Licenciaturas" },
      { path: "Posgrados", name: "Posgrados" },
      { path: "EducacionContinua", name: "Educación Continua" },
    ],
  },
  { path: "AdministracionCentral", name: "Administracion Central" },
  { path: "ValoresUagro", name: "Valores Uagro" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  return (
    <>
      {/* PRIMERA SECTION DEL HEADER (TONO AZUL BAJO) */}
      <section
        className="w-full h-1/3 lg:h-full bg-blue-800/70 flex flex-col lg:flex-row
            gap-4 justify-center items-center md:justify-between px-8 font-light text-white"
      >
        <ul className="flex space-x-4 justify-center items-center">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="inline-block mr-0" />
              <span className="hidden lg:inline ml-2">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="inline-block mr-0" />
              <span className="hidden lg:inline ml-2">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png"
                alt="X Logo"
                width="17"
                className="inline-block mr-0"
              />
              <span className="hidden lg:inline ml-2">(Twitter)</span>
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="inline-block mr-0" />
              <span className="hidden lg:inline ml-2">Youtube</span>
            </a>
          </li>
        </ul>

        <ul className="hidden md:flex flex-col md:flex-row justify-center items-center md:space-x-6 text-md font-light gap-4">
          <li className="flex items-center">
            <FaPhone className="inline-block mr-2" />
            Teléfono: 01 (747) 471-93-10 Ext. 3000
          </li>
          <li className="flex items-center">
            <FaEnvelope className="inline-block mr-2" />
            Email: rectoria@uagro.mx
          </li>
        </ul>
      </section>

      <nav className="w-full h-full text-white font-stretch-normal flex flex-col items-center justify-center sticky top-0 z-50">
        {/* SEGUNDA SECCION DEL HEADER (AZUL TONO ALTO) */}
        <section className="w-full h-auto bg-[#131837]">
          <div className="w-full h-full flex justify-between items-center bg-[#131837] py-6 lg:py-0 px-4 lg:px-16 relative">
            {/* LOGO */}
            <div className="w-full h-full lg:w-1/5 flex justify-start items-center">
              <img
                src="https://dgtidweb.uagro.mx/ejemplo/images/uagro-logo-2024.png"
                alt=""
                className="h-10 w-auto lg:h-12"
              />
            </div>

            {/* SEGUNDA MITAD EN LA SEGUNDA SECCION */}
            <div className="w-full h-full lg:w-4/5 flex flex-col justify-end items-center">
              {/* Menu de navegacion visible en pantallas grandes */}
              <ul className="hidden lg:flex w-full h-full space-x-8 gap-4 justify-end items-center py-8">
                {routes.map((route) => (
                  <li
                    className="text-md text-center font-semibold relative group"
                    key={route.path}
                    onMouseEnter={() => route.submenu && setIsSubmenuOpen(true)}
                    onMouseLeave={() =>
                      route.submenu && setIsSubmenuOpen(false)
                    }
                  >
                    {route.submenu ? (
                      <>
                        <button
                          className="flex items-center gap-1 text-white hover:text-red-500 transition-colors duration-500"
                          onClick={toggleSubmenu}
                        >
                          {route.name}
                          {isSubmenuOpen ? (
                            <FaChevronUp size={12} />
                          ) : (
                            <FaChevronDown size={12} />
                          )}
                        </button>
                        {isSubmenuOpen && (
                          <ul className="absolute left-0 mt-2 w-48 bg-[#131837] rounded-md shadow-lg z-50">
                            {route.submenu.map((subitem) => (
                              <li
                                key={subitem.path}
                                className="py-2 px-4 hover:bg-blue-900"
                              >
                                <NavLink
                                  to={subitem.path}
                                  className="block text-white hover:text-red-400"
                                >
                                  {subitem.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={route.path}
                        className={({ isActive }) =>
                          isActive
                            ? "text-gray-400"
                            : "text-white hover:text-red-500 transition-colors duration-500"
                        }
                      >
                        {route.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>

              {/* Ícono de hamburguesa (visible en pantallas pequeñas) */}
              <div className="lg:hidden z-30 absolute top-8 right-4">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Menú desplegable (visible en pantallas pequeñas) */}
              {isMenuOpen && (
                <div
                  className="lg:hidden bg-black/65 backdrop-blur-md transition-all duration-700 ease-in-out
            absolute top-20 left-0 w-full z-20 pb-4"
                >
                  <ul className="flex flex-col space-y-6 p-4 mb-6">
                    {routes.map((route) => (
                      <li className="text-md font-normal" key={route.path}>
                        {route.submenu ? (
                          <>
                            <button
                              className="flex items-center gap-2 text-white"
                              onClick={toggleSubmenu}
                            >
                              {route.name}
                              {isSubmenuOpen ? (
                                <FaChevronUp size={12} />
                              ) : (
                                <FaChevronDown size={12} />
                              )}
                            </button>
                            {isSubmenuOpen && (
                              <ul className="ml-4 mt-2 space-y-3">
                                {route.submenu.map((subitem) => (
                                  <li key={subitem.path}>
                                    <NavLink
                                      to={subitem.path}
                                      className="block text-gray-300 hover:text-white"
                                    >
                                      {subitem.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <NavLink
                            to={route.path}
                            className={({ isActive }) =>
                              isActive
                                ? "text-gray-300"
                                : "text-white hover:text-red-800 transition-colors duration-500"
                            }
                          >
                            {route.name}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Línea divisora */}
                  <div className="border-t-2 border-white mx-4 mb-6"></div>

                  <ul className="grid grid-cols-2 gap-2 p-4 text-white font-ligth text-sm">
                    <li
                      className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                    border-black text-center mb-2"
                    >
                      <a href="">Aspirantes</a>
                    </li>
                    <li
                      className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                    border-black text-center mb-2"
                    >
                      <a href="">Estudiantes</a>
                    </li>
                    <li
                      className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                    border-black text-center mb-2"
                    >
                      <a href="">Titulacion</a>
                    </li>
                    <li
                      className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                    border-black text-center mb-2"
                    >
                      <a href="">Egresados</a>
                    </li>
                    <li
                      className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                    border-black text-center mb-2"
                    >
                      <a href="">Trabajadores</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Header;
