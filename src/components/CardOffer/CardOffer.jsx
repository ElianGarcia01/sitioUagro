import { useState } from "react"
import "./CardOffer.css"
import Bachillerato from "../../assets/images/Bachillerato.jpg"
import Licenciatura from "../../assets/images/Licenciatura.jpg"
import Posgrado from "../../assets/images/Posgrado.jpg"

const cardsData = [
    { id: 1, name: "Bachillerato", back: "Información adicional de Bachillerato", img: Bachillerato },
    { id: 2, name: "Tec.Bach.Univ.", back: "Información adicional de Licenciatura", img: Licenciatura },
    { id: 3, name: "PSU", back: "Información adicional de Posgrado", img: Posgrado },
    { id: 4, name: "Licenciatura", back: "Cursos y talleres disponibles", img: Licenciatura },
    { id: 5, name: "Posgrado", back: "Oferta de lenguas extranjeras", img: Bachillerato },
    { id: 6, name: "Modalidad Virtual y MIxta", back: "Apoyo a proyectos académicos", img: Posgrado },
]

// Colores de frente alternando cada dos tarjetas
const getFrontColor = (index) => {
    const colors = ["bg-gray-200/90", "bg-red-200/90", "bg-blue-200/90"]
    return colors[Math.floor(index / 2) % colors.length]
}

const CardOffer = () => {
    const [flippedCard, setFlippedCard] = useState(null)

    const handleCardClick = (cardId) => {
        setTimeout(() => {
            setFlippedCard(flippedCard === cardId ? null : cardId)
        }, 100)
    }

    const handleMouseEnter = (cardId) => {
        setFlippedCard(cardId)
    }

    const handleMouseLeave = () => {
        setFlippedCard(null)
    }

    return (
        <div className="h-full w-full relative pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-5 justify-items-center">
                {cardsData.map((card, index) => (
                    <div
                        key={card.id}
                        className="relative w-full h-48 p-4 lg:w-80 lg:h-64 mx-auto cursor-pointer perspective-1000 flex justify-center"
                        onClick={() => handleCardClick(card.id)}
                        onMouseEnter={() => handleMouseEnter(card.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={`absolute shadow-2xl w-full h-full transition-transform duration-500 ease-in-out transform-style preserve-3d ${
                                flippedCard === card.id ? "rotate-y-180" : ""
                            }`}
                        >
                            {/* Frente */}
                            <div className={`absolute w-full h-full text-black flex ${getFrontColor(index)} items-center justify-center rounded-lg shadow-lg backface-hidden`}>
                                <h3 className="text-xl font-light">{card.name}</h3>
                            </div>

                            {/* Reverso */}
                            <div className="absolute w-full h-full text-white bg-[#131837] flex flex-col items-center justify-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className="h-full w-full object-cover object-center rounded-lg"
                                />
                                <button className="absolute bottom-4 bg-red-500 text-white rounded-lg px-4 py-2 cursor-pointer w-2/4 text-sm font-semibold">
                                    {card.name}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardOffer
