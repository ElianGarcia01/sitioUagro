import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton"; // Importa Skeleton
import "react-loading-skeleton/dist/skeleton.css"; // Importa los estilos de Skeleton
import "./CardFlip.css";

const CardFlip = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://strapi.uagro.mx/api/servicios-imagenes"
        );
        setServicios(response.data.docs.reverse());
        setLoading(false); // Cuando los datos se obtienen, actualizamos el estado
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // En caso de error, también desactivamos el estado de carga
      }
    };
    getData();
  }, []);

  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setTimeout(() => {
      if (flippedCard === cardId) {
        setFlippedCard(null);
      } else {
        setFlippedCard(cardId);
      }
    }, 100);
  };

  const handleMouseEnter = (cardId) => {
    setFlippedCard(cardId);
  };

  const handleMouseLeave = () => {
    setFlippedCard(null);
  };

  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0.5 w-full mx-auto h-full">
        {loading ? (
          // Skeleton Loader responsivo para pantallas pequeñas y grandes
          Array(6).fill().map((_, index) => (
            <div
              key={index}
              className="relative bg-gray-300 w-full h-64 sm:h-72 md:h-64 lg:h-56 mx-auto cursor-pointer perspective-100 flex justify-center"
            >
              <Skeleton
                height="100%" // Altura completa de la tarjeta
                width="100%" // Ancho completo de la tarjeta
                className="rounded-lg"
              />
            </div>
          ))
        ) : (
          servicios.map((servicio, index) => (
            <div
              key={index}
              className="relative w-full h-64 sm:h-72 md:h-64 lg:h-56 mx-auto cursor-pointer perspective-1000 flex justify-center"
              style={{
                backgroundImage: `url(${servicio.imagenFondo.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out transform-style preserve-3d ${
                  flippedCard === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Frente */}
                <div className="absolute w-full h-full text-white flex items-center justify-center rounded-lg shadow-lg backface-hidden">
                  <img
                    src={servicio.imagenFrontal.url}
                    alt={servicio.titulo}
                    className="w-40 sm:w-44 lg:w-48 object-cover object-center"
                  />
                </div>
                {/* Reverso */}
                <div className="absolute w-full h-full bg-[#131837] text-white flex flex-col items-center justify-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
                  <p className="text-center p-4">{servicio.titulo}</p>
                  <button className="bg-red-700 py-2 px-4 rounded-xl text-md font-semibold cursor-pointer">
                    Saber más...
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardFlip;
