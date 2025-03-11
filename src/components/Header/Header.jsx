import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaPhone, FaEnvelope } from "react-icons/fa"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

function Header() {
    // ESTADO Y FUNCION PARA ABRIR Y CERRAR EL NAVBAR EN PANTALLAS PEQUEÑAS
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    // ARREGLO DE OBJETOS, RUTAS
    const routes = [
        { path: "/", name: "Inicio" },
        { path: "Conocenos", name: "Conocenos" },
        { path: "HConsejoUniversitario", name: "H. Consejo Universitario" },
        { path: "OfertaEducativa", name: "Oferta Educativa" },
        { path: "AdministracionCentral", name: "Administracion Central" },
        { path: "ValoresUagro", name: "Valores Uagro" },
    ]

    return (
        <nav className="w-full bg-[#131837] text-white font-stretch-normal flex flex-col items-center justify-center relative">

            {/* PRIMERA SECTION DEL HEADER (AZUL TONO BAJO) */}
            <div className="w-full h-full bg-blue-400/35 flex flex-col lg:flex-row gap-4 justify-center items-center md:justify-between px-8 lg:font-light">
                <ul className="flex space-x-4 justify-center items-center">
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="inline-block mr-0" />
                            <span className="hidden lg:inline ml-2">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="inline-block mr-0" />
                            <span className="hidden lg:inline ml-2">Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png" alt="X Logo" width="17" className="inline-block mr-0" />
                            <span className="hidden lg:inline ml-2">(Twitter)</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
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
            </div>

            {/* SEGUNDA SECCION DEL HEADER (AZUL TONO ALTO) */}
            <div className="w-full h-full container flex justify-between gap-12 items-center py-6 lg:py-0 px-6 relative">
                {/* LOGO */}
                <div className="flex justify-center items-center lg:w-1/5">
                    <img
                        src="https://dgtidweb.uagro.mx/ejemplo/images/uagro-logo-2024.png"
                        alt=""
                        className="h-10 lg:h-14"
                    /> 
                </div>

                {/* SEGUNDA MITAD EN LA SEGUNDA SECCION */}
                <div className="flex flex-col justify-center items-center pt-8 gap-4">

                    {/* Menu de navegacion visible en pantallas grandes */}
                    <ul className="hidden lg:flex space-x-5 flex-wrap gap-4 justify-center items-center h-full mb-2">
                        {routes.map((route) => (
                            <li className="text-md font-semibold" key={route.path}>
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) => (isActive ? "text-gray-400" : "text-white hover:text-red-800 transition-colors duration-500")}
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Segunda lista de navegacion */}
                    <ul className="hidden lg:flex flex-row justify-end items-center h-full w-full">
                        <li className="bg-gray-400 py-1 px-5 hover:bg-red-800 transition-colors duration-500 border-x-1 border-black text-center">
                            <a href="">Aspirantes</a>
                        </li>
                        <li className="bg-gray-400 py-1 px-5 hover:bg-red-800 transition-colors duration-500 border-x-1 border-black text-center">
                            <a href="">Estudiantes</a>
                        </li>
                        <li className="bg-gray-400 py-1 px-5 hover:bg-red-800 transition-colors duration-500 border-x-1 border-black text-center">
                            <a href="">Titulacion</a>
                        </li>
                        <li className="bg-gray-400 py-1 px-5 hover:bg-red-800 transition-colors duration-500 border-x-1 border-black text-center">
                            <a href="">Egresados</a>
                        </li>
                        <li className="bg-gray-400 py-1 px-5 hover:bg-red-800 transition-colors duration-500 border-x-1 border-black text-center">
                            <a href="">Trabajadores</a>
                        </li>
                    </ul>

                    {/* Menú desplegable (visible en pantallas pequeñas) */}
                    {isMenuOpen && (
                        <div className="lg:hidden bg-black/65 backdrop-blur-md transition-all duration-700 ease-in-out
                        absolute top-20 md:top-20 left-0 w-full z-20 pb-4">
                            <ul className="flex flex-col space-y-6 p-4 mb-6">
                                {routes.map((route) => (
                                    <li className="text-md font-normal" key={route.path}>
                                        <NavLink
                                            to={route.path}
                                            className={({ isActive }) => (isActive ? "text-gray-300" : "text-white hover:text-red-800 transition-colors duration-500")}
                                        >
                                            {route.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            {/* Línea divisora */}
                            <div className="border-t-2 border-white mx-4 mb-6"></div>

                            <ul className="grid grid-cols-3 gap-2 p-4 text-white font-semibold text-xs">
                                <li className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                                border-black text-center mb-2">
                                    <a href="">Aspirantes</a>
                                </li>
                                <li className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                                border-black text-center mb-2">
                                    <a href="">Estudiantes</a>
                                </li>
                                <li className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                                border-black text-center mb-2">
                                    <a href="">Titulacion</a>
                                </li>
                                <li className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                                border-black text-center mb-2">
                                    <a href="">Egresados</a>
                                </li>
                                <li className="bg-blue-400/50 py-1 px-2 md:px-5 hover:bg-[#131837] transition-colors duration-500 border-x-1 
                                border-black text-center mb-2">
                                    <a href="">Trabajadores</a>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Ícono de hamburguesa (visible en pantallas pequeñas) */}
                    <div className="lg:hidden z-30 absolute top-8">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg
                                className="w-6 h-6"
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
                </div>
            </div>
        </nav>
    )
}

export default Header

