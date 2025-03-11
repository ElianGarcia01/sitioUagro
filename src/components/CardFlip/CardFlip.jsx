import React, { useState } from "react"
import "./CardFlip.css"
import image1 from "../../assets/images/image1.webp"
import image2 from "../../assets/images/image2.webp"
import image3 from "../../assets/images/image3.webp"
import image4 from "../../assets/images/image4.webp"
import image5 from "../../assets/images/image5.webp"
import image6 from "../../assets/images/image6.webp"
import vinculacion from "../../assets/images/vinculacion.png"
import indicadores from "../../assets/images/indicadores.webp"
import uagroVirtual from "../../assets/images/uagroVirtual.webp"
import sia from "../../assets/images/sia.webp"
import inclusion from "../../assets/images/inclusion.webp"
import cultura from "../../assets/images/cultura.webp"
import deportes from "../../assets/images/deportes.webp"
import tecnologias from "../../assets/images/tecnologias.webp"


const cardsData = [
    { id: 1, name: "vinculacion", back: "Información adicional de la Card 1", imgback: image1, imgname: vinculacion },
    { id: 2, name: "indicadores", back: "Información adicional de la Card 2", imgback: image1, imgname: indicadores },
    { id: 3, name: "uagroVirtual", back: "Información adicional de la Card 2", imgback: image2, imgname: uagroVirtual },
    { id: 4, name: "sia", back: "Información adicional de la Card 1", imgback: image3, imgname: sia },
    { id: 5, name: "inclusion", back: "Información adicional de la Card 2", imgback: image4, imgname: inclusion },
    { id: 6, name: "cultura", back: "Información adicional de la Card 2", imgback: image5, imgname: cultura },
    { id: 7, name: "deportes", back: "Información adicional de la Card 1", imgback: image6, imgname: deportes },
    { id: 8, name: "tecnologias", back: "Información adicional de la Card 1", imgback: image3, imgname: tecnologias },

]

const CardFlip = () => {
    const [flippedCard, setFlippedCard] = useState(null)

    // Maneja el clic en la tarjeta
    const handleCardClick = (cardId) => {
        setTimeout(() => {
            if (flippedCard === cardId) {
                setFlippedCard(null);
            } else {
                setFlippedCard(cardId);
            }
        }, 100); // Retraso de 100ms
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
        <div className="bg-gray-100 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 w-full max-w-screen mx-auto h-full">
                {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className="relative w-full h-52 mx-auto cursor-pointer perspective-1000 flex justify-center"
                        style={{
                            backgroundImage: `url(${card.imgback})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        onClick={() => handleCardClick(card.id)} // Maneja el clic
                        onMouseEnter={() => handleMouseEnter(card.id)} // Maneja el hover (solo escritorio)
                        onMouseLeave={() => handleMouseLeave()} // Maneja el hover fuera (solo escritorio)
                    >
                        <div
                            className={`absolute w-full h-full transition-transform duration-500 ease-in-out transform-style preserve-3d ${flippedCard === card.id ? "rotate-y-180" : ""
                                }`}
                        >
                            {/* Frente */}
                            <div className="absolute w-full h-full text-white flex items-center justify-center rounded-lg shadow-lg backface-hidden">
                                <img
                                    src={card.imgname}
                                    alt={card.name}
                                    className="h-36 w-36 object-contain object-center"
                                />
                            </div>
                            {/* Reverso */}
                            <div className="absolute w-full h-full bg-[#131837] text-white flex items-center justify-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
                                <p className="text-center p-4">{card.back}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardFlip