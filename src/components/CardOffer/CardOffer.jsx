import React, { useState } from "react"
import "./CardOffer.css"
import Bachillerato from "../../assets/images/Bachillerato.jpg"
import Licenciatura from "../../assets/images/Licenciatura.jpg"
import Posgrado from "../../assets/images/Posgrado.jpg"

const cardsData = [
    { id: 1, name: "Bachillerato", back: "Información adicional de la Card 1", img: Bachillerato },
    { id: 2, name: "Licenciatura", back: "Información adicional de la Card 2", img: Licenciatura },
    { id: 3, name: "Posgrado", back: "Información adicional de la Card 2", img: Posgrado },
]

const CardOffer = () => {
    const [flippedCard, setFlippedCard] = useState(null)

    // Maneja el clic en la tarjeta
    const handleCardClick = (cardId) => {
        setTimeout(() => {
            if (flippedCard === cardId) {
                setFlippedCard(null);
            } else {
                setFlippedCard(cardId);
            }
        }, 100) // Retraso de 100ms
    }

    // Maneja el hover en la tarjeta (solo para escritorio)
    const handleMouseEnter = (cardId) => {
        setFlippedCard(cardId)
    }

    // Maneja el hover fuera de la tarjeta (solo para escritorio)
    const handleMouseLeave = () => {
        setFlippedCard(null)
    }

    return (
        <div className="h-full w-full relative">
            <div className="flex flex-col lg:flex-row px-2 justify-center items-center gap-5 w-full h-full absolute top-5/12 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className="relative w-full h-48 p-4 lg:w-96 lg:h-64 mx-auto cursor-pointer perspective-1000 flex justify-center"
                        onClick={() => handleCardClick(card.id)} // Maneja el clic
                        onMouseEnter={() => handleMouseEnter(card.id)} // Maneja el hover (solo escritorio)
                        onMouseLeave={() => handleMouseLeave()} // Maneja el hover fuera (solo escritorio)
                    >
                        <div
                            className={`absolute shadow-2xl w-full h-full transition-transform duration-500 ease-in-out transform-style preserve-3d ${flippedCard === card.id ? "rotate-y-180" : ""
                                }`}
                        >
                            {/* Frente */}
                            <div className="absolute w-full h-full text-white flex bg-[#131837]/90 items-center justify-center rounded-lg shadow-lg backface-hidden">
                                <h3 className="text-xl font-light">{card.name}</h3>
                            </div>
                            {/* Reverso */}
                            <div className="absolute w-full h-full text-white bg-[#131837] flex flex-col items-center justify-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className="h-full w-full object-cover object-center rounded-lg"
                                />
                                {/* <button className="text-center bg-red-600 rounded-lg p-4 cursor-pointer">{card.name}</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardOffer