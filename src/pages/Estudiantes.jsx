import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { FaCircleUser, FaUserPen } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Estudiantes() {
  return (
    <>
      <section className="bg-[#192a48] text-white px-16">
        {/* Segunda lista de navegacion */}
        <ul className="hidden h-full w-full lg:flex flex-row justify-end items-center">
          <NavLink
            to="/frontend/estudiantes"
            className={({ isActive }) =>
              isActive
                ? "bg-red-800 transition-color py-1 px-5  duration-500 border-x-1 border-black text-center"
                : "text-white hover:bg-red-800 bg-gray-500"
            }
          >
            <FaCircleUser className="inline-block mr-2" />
            Estudiantes
          </NavLink>
          <li className="bg-gray-500 py-1 px-5 hover:bg-red-800 transition-colors duration-500 border-x-1 border-black text-center">
            <a href="https://admisionescolar.uagro.mx/">
              <FaUserPen className="inline-block mr-2" />
              Aspirantes
            </a>
          </li>
          <li className="bg-gray-500 py-1 px-5 hover:bg-red-800 transition-colors duration-500 border-x-1 border-black text-center">
            <a href="https://titulosygrados.uagro.mx/">
              <FaGraduationCap className="inline-block mr-2" />
              Titulacion
            </a>
          </li>
          <li className="bg-gray-500 py-1 px-5 hover:bg-red-800 transition-colors duration-500 border-x-1 border-black text-center">
            <a href="https://egresados.uagro.mx/">
              <FaUserGraduate className="inline-block mr-2" />
              Egresados
            </a>
          </li>
        </ul>
      </section>
      
      <section className="min-h-screen bg-gray-500 text-center flex justify-center items-center">
        {/* MENSAJE */}
        <h1 className="text-xl lg:text-3xll font-bold text-white p-4">
          EN MANTENIMIENTO
        </h1>

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </section>
    </>
  );
}
