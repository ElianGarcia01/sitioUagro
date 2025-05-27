import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CardFlip.css";
import { Link, Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { statusHttp } from "../../redux/reducers/EduReducer";

const CardFlip = () => {
  const [imagenesCargadas, setImagenesCargadas] = useState({}); // Estado para controlar cada imagen
  const { servicesState } = useSelector((state) => state.school)
  const { services, status } = servicesState
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setTimeout(() => {
      setFlippedCard(flippedCard === cardId ? null : cardId);
    }, 100);
  };

  const handleMouseEnter = (cardId) => {
    setFlippedCard(cardId);
  };

  const handleMouseLeave = () => {
    setFlippedCard(null);
  };

  const handleImageLoad = (index) => {
    setImagenesCargadas((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0.5 w-full mx-auto h-full">
        {status === statusHttp.PENDING
          ? Array(6)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="relative bg-gray-300 w-full h-64 sm:h-72 md:h-64 lg:h-56 mx-auto cursor-pointer perspective-100 flex justify-center items-center"
                >
                  <Skeleton height="100%" width="100%" className="rounded-lg" />
                </div>
              ))
          : services.map((service, index) => (
              <div
                key={index}
                className="relative w-full h-64 sm:h-72 md:h-64 lg:h-56 mx-auto cursor-pointer perspective-1000 flex justify-center"
                style={{
                  backgroundImage: `url(${service.imagenFondo.url})`,
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
                    {!imagenesCargadas[index] && (
                      <div className="absolute">
                        <ClipLoader color="#000080" size={40} />
                      </div>
                    )}
                    <img
                      src={service.imagenFrontal.url}
                      alt={service.titulo}
                      className={`w-40 sm:w-44 lg:w-48 object-cover object-center transition-opacity duration-300 ${
                        imagenesCargadas[index] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>

                  {/* Reverso */}
                  <div className="absolute w-full h-full bg-[#131837] text-white flex flex-col items-center justify-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
                    <p className="text-center p-4">{service.titulo}</p>
                    <Link
                      to={`${service.url}`}
                    >
                      <button className="bg-red-700 hover:bg-red-800 py-2 px-4 rounded-xl text-md font-semibold cursor-pointer">
                        Saber más...
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CardFlip;
