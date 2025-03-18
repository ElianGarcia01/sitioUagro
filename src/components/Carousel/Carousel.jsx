import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../Carousel/Carousel.css"


const cardsData = [
    { id: 1, name: "Movilidad estudiantil 2025-B", img: "https://dgtidweb.uagro.mx/ejemplo/images/2025/02/19/recurso-1.png", description: "Si eres estudiante de la #UAGro y quieres vivir una experiencia académica en otra institución, participa en el Programa de Movilidad Estudiantil 2025-B. Podrás cursar un semestre o realizar una estancia de investigación a nivel TSU, Licenciatura, Maestría o Doctorado." },
    { id: 2, name: "Dia internacional de la lucha contra el cáncer infantil", img: "https://dgtidweb.uagro.mx/ejemplo/images/2025/02/19/recurso-2.png", description: "En el dia internacional de la Lucha contra el Cáncer infantil, recordamos la importancia de la prevencion, el diagnostico temprano y el apoyo a los niños y sus familias." },
    { id: 3, name: "Ponte Águila y titúlate", img: "https://dgtidweb.uagro.mx/ejemplo/images/2025/02/19/recurso-3.png", description: "Si eres estudiante de la #UAGro y quieres vivir una experiencia académica en otra institución, participa en el Programa de Movilidad Estudiantil 2025-B. Podrás cursar un semestre o realizar una estancia de investigación a nivel TSU, Licenciatura, Maestría o Doctorado." },
    { id: 4, name: "Movilidad estudiantil 2025-B", img: "https://dgtidweb.uagro.mx/ejemplo/images/2025/02/19/recurso-2.png", description: "Si eres estudiante de la #UAGro y quieres vivir una experiencia académica en otra institución, participa en el Programa de Movilidad Estudiantil 2025-B. Podrás cursar un semestre o realizar una estancia de investigación a nivel TSU, Licenciatura, Maestría o Doctorado." },
]

const Carousel = () => {
    return (
        <div className="w-full h-full mx-auto mt-2">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3, // En pantallas grandes, 3 imágenes por slide
                        slidesPerGroup: 1 // Mueve 1 imágen por grupo
                    }
                }}
                className="w-full h-full"
            >
                {cardsData.map((item) => (
                    <SwiperSlide key={item.id} className="lg:px-10 pb-8">
                        <div className="h-full w-full bg-gray-100 border-black rounded-xl">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-44 lg:h-1/3 object-fill rounded-t-xl"
                            />
                            <div className="lg:h-2/3">
                                <h3 className="text-xl text-center font-bold pt-8 lg:pb-8">{item.name}</h3>
                                <p className="text-sm font-normal text-justify px-4 pb-4">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
