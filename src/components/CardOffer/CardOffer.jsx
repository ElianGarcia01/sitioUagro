import { useState } from "react";
import "./CardOffer.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardOffer = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setTimeout(() => {
      setFlippedCard(flippedCard === cardId ? null : cardId);
    }, 100);
    console.log("este es el cardData", cardsData);
  };

  const handleMouseEnter = (cardId) => {
    setFlippedCard(cardId);
  };

  const handleMouseLeave = () => {
    setFlippedCard(null);
  };

  const cardsData = useSelector((state) => state.school.offersState.offers);

  return (
    <div className="h-full w-full relative pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-38 gap-5 justify-items-center">
        {cardsData.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative w-full h-48 p-4 lg:w-80 lg:h-64 mx-auto cursor-pointer perspective-1000 flex justify-center"
            onClick={() => handleCardClick(card.id)}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={handleMouseLeave}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              scale: 0.8,
            }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div
              className={`absolute shadow-2xl w-full h-full transition-transform duration-500 ease-in-out transform-style ${
                flippedCard === card.id ? "rotate-y-180" : ""
              }`}
            >
              {/* Frente */}
              <div
                className="absolute w-full h-full text-black flex items-center justify-center rounded-lg shadow-lg backface-hidden"
                style={{ backgroundColor: card.color, opacity: 0.7 }}
              >
                <h3 className="text-xl font-bold">{card.titulo}</h3>
              </div>

              {/* Reverso */}
              <div className="absolute w-full h-full text-white bg-[#131837] flex flex-col items-center justify-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
                <img
                  src={card.imagenReverso.url}
                  alt={card.titulo}
                  className="h-full w-full object-cover object-center rounded-lg"
                />
                <Link
                  to={`${card.url}`}
                  className="absolute top-1/2 bg-red-500 text-white rounded-lg px-4 py-2
                cursor-pointer w-2/4 text-sm text-center font-semibold"
                >
                  {card.titulo}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardOffer;
