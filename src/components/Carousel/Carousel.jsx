import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import image1 from "../../assets/images/image1.webp"
import image2 from "../../assets/images/image2.webp"
import image3 from "../../assets/images/image3.webp"

import vinculacion from "../../assets/images/vinculacion.png"
import indicadores from "../../assets/images/indicadores.webp"
import uagroVirtual from "../../assets/images/uagroVirtual.webp"

const cardsData = [
    { id: 1, front: "Card 1", back: "Información adicional de la Card 1", imgback: image1, imgfront: vinculacion },
    { id: 2, front: "Card 2", back: "Información adicional de la Card 2", imgback: image1, imgfront: indicadores },
    { id: 3, front: "Card 3", back: "Información adicional de la Card 2", imgback: image2, imgfront: uagroVirtual },
    { id: 4, front: "Card 4", back: "Información adicional de la Card 1", imgback: image3, imgfront: vinculacion },
    { id: 5, front: "Card 5", back: "Información adicional de la Card 2", imgback: image1, imgfront: indicadores },
    { id: 6, front: "Card 6", back: "Información adicional de la Card 2", imgback: image2, imgfront: uagroVirtual },
    { id: 7, front: "Card 7", back: "Información adicional de la Card 1", imgback: image1, imgfront: vinculacion },
]

const Carousel = () => {
    return (
        <div className="w-full max-w-7xl mx-auto mt-2 h-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={5}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-full"
            >
                {cardsData.map((item) => (
                    <SwiperSlide key={item.id} className="px-8 md:px-3.5 py-8">
                        <div className="relative h-40 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-md rounded-xl"
                            style={{
                                backgroundImage: `url(${item.imgback})`, // Asegúrate de usar `imgback`
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <img
                                src={item.imgfront}
                                alt={item.name}
                                className="w-full h-24 object-cover object-center"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
