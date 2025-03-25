import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
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
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  // Referencias para el menú y el botón
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileSubmenu = () => setMobileSubmenuOpen(!mobileSubmenuOpen);

  // Función para manejar el hover en el menú principal
  const handleMainItemHover = (path) => {
    setActiveSubmenu(path);
  };

  // Función para manejar el hover en el contenedor del submenú
  const handleSubmenuHover = (path) => {
    setActiveSubmenu(path);
  };

  // Función para limpiar el estado cuando el mouse sale completamente del menú y submenú
  const handleLeaveMenu = () => {
    setActiveSubmenu(null);
  };

  // Efecto para cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
          <div className="w-full h-full flex justify-between items-center bg-[#131837] py-4 lg:py-0 px-4 lg:px-16 relative">
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
              <ul
                className="hidden lg:flex w-full h-full space-x-8 gap-4 justify-end items-center py-8"
                onMouseLeave={handleLeaveMenu}
              >
                {routes.map((route) => (
                  <li
                    className="text-md text-center font-semibold relative group"
                    key={route.path}
                    onMouseEnter={() => handleMainItemHover(route.path)}
                  >
                    {route.submenu ? (
                      <>
                        <button className="flex items-center gap-1 text-white hover:text-red-500 transition-colors duration-500">
                          {route.name}
                          {activeSubmenu === route.path ? (
                            <FaChevronUp size={12} />
                          ) : (
                            <FaChevronDown size={12} />
                          )}
                        </button>
                        {activeSubmenu === route.path && (
                          <ul
                            className="absolute left-0 mt-2 w-48 bg-[#131837] rounded-md shadow-lg z-50"
                            onMouseEnter={() => handleSubmenuHover(route.path)}
                            onMouseLeave={handleLeaveMenu}
                          >
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
              <div className="lg:hidden z-30 absolute top-6 right-4">
                <button
                  ref={buttonRef}
                  onClick={toggleMenu}
                  className="text-white focus:outline-none text-2xl transition-transform duration-300 hover:scale-110"
                  aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              {/* Menú desplegable (visible en pantallas pequeñas) */}
              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="lg:hidden bg-[#131837] shadow-xl transition-all duration-300 ease-in-out
                    absolute top-16 left-0 w-full z-20 max-h-[calc(100vh-4rem)] overflow-y-auto"
                >
                  <div className="px-4 py-2">

                    {/* Menú principal */}
                    <ul className="space-y-1">
                      {routes.map((route) => (
                        <li className="text-md font-medium" key={route.path}>
                          {route.submenu ? (
                            <>
                              <button
                                className="flex items-center justify-between w-full py-3 px-2 text-white hover:bg-blue-900/50 rounded transition-colors"
                                onClick={toggleMobileSubmenu}
                              >
                                <span>{route.name}</span>
                                {mobileSubmenuOpen ? (
                                  <FaChevronUp size={12} />
                                ) : (
                                  <FaChevronDown size={12} />
                                )}
                              </button>
                              {mobileSubmenuOpen && (
                                <ul className="ml-4 mb-2 space-y-1">
                                  {route.submenu.map((subitem) => (
                                    <li key={subitem.path}>
                                      <NavLink
                                        to={subitem.path}
                                        className="block py-2 px-2 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded transition-colors"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setMobileSubmenuOpen(false);
                                        }}
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
                                `block py-3 px-2 rounded transition-colors ${
                                  isActive
                                    ? "text-gray-300 bg-blue-500/30"
                                    : "text-white hover:text-white hover:bg-blue-500/30"
                                }`
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {route.name}
                            </NavLink>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* Línea divisora */}
                    <div className="border-t border-white/20 my-3"></div>

                    {/* Menú secundario */}
                    <ul className="space-y-2 mb-3">
                      {[
                        {
                          icon: <FaUserPen className="text-lg mr-3" />,
                          text: "Aspirantes",
                        },
                        {
                          icon: <FaCircleUser className="text-lg mr-3" />,
                          text: "Estudiantes",
                        },
                        {
                          icon: <FaGraduationCap className="text-lg mr-3" />,
                          text: "Titulación",
                        },
                        {
                          icon: <FaUserGraduate className="text-lg mr-3" />,
                          text: "Egresados",
                        },
                        {
                          icon: <FaUserGear className="text-lg mr-3" />,
                          text: "Trabajadores",
                        },
                      ].map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="flex items-center py-3 px-2 bg-blue-400/40 hover:bg-blue-400/70 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.icon}
                            <span>{item.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
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