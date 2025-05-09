import { FaCircleArrowRight } from "react-icons/fa6";
import logo from "../assets/images/logoaguilas.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

const cardsData = [
  {
    title: "Talentos Uagro",
    img: "https://uagro.mx/images/derportes/telentos-03.webp",
    alt: "talentos",
    description:
      "Descubre los programas que impulsan a los jóvenes atletas universitarios con talento excepcional.",
  },
  {
    title: "Disciplinas",
    img: "https://uagro.mx/images/derportes/disciplinas-03.webp",
    alt: "disciplinas",
    description:
      "Explora la variedad de disciplinas deportivas que forman parte de la vida universitaria en la UAGro.",
  },
  {
    title: "Premios",
    img: "https://uagro.mx/images/derportes/premios-03.webp",
    alt: "premios",
    description:
      "Conoce los reconocimientos y logros alcanzados por nuestros deportistas a lo largo de los años.",
  },
];

const noticias = [
  {
    id: 1,
    nombre: "Inauguración de nuevas instalaciones deportivas",
    imagen:
      "https://uagro.mx/images/NotasUAGro/deportes/486827641_948404677507207_4138768358095788239_n.jpg",
    descripcion:
      "La UAGro celebró la apertura de un moderno complejo deportivo que beneficiará a cientos de estudiantes en Chilpancingo.",
  },
  {
    id: 2,
    nombre: "Estudiante gana medalla nacional",
    imagen:
      "https://uagro.mx/images/NotasUAGro/deportes/484990294_1047134554108640_5563382635860378113_n.jpg",
    descripcion:
      "Una estudiante de la UAGro obtuvo el primer lugar en el campeonato nacional universitario de atletismo.",
  },
  {
    id: 3,
    nombre: "Torneo Interuniversitario 2025",
    imagen:
      "https://uagro.mx/images/NotasUAGro/deportes/481313734_1044989814323114_1522205884417754772_n.jpg",
    descripcion:
      "Comienza el esperado Torneo Interuniversitario, con la participación de equipos de todo el estado de Guerrero.",
  },
];

export default function Deportes() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      {/* Banner Deportes */}
      <section
        className="h-12 lg:h-52 w-full bg-cover"
        style={{
          backgroundImage:
            "url('https://uagro.mx/images/derportes/header-deportes.webp') ",
        }}
      ></section>

      {/* Aguilas Uagro */}
      <section
        className="h-full pb-14 lg:min-h-screen bg-cover bg-center gap-8 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('assets/slider02.webp') ",
        }}
      >
        <div className="h-24 md:h-32 w-56 lg:w-64 mt-20">
          <img src={logo} alt="" className="w-full h-full" />
        </div>

        <div className="w-3/4">
          <p className="text-white text-center text-md lg:text-xl">
            Somos un club de futbol profesional con sede en Chilpancingo de los
            Bravos en el estado de Guerrero. la escueadra universitaria compite
            en la Liga TDP(Tercera División Profesional en México) desde el año
            2015, es el equipo oficial de la UAGro; Universidad Autonoma de
            Guerrero.
          </p>
        </div>

        <div>
          <button
            className="bg-red-600 hover:bg-red-800
          px-4 py-2 text-white text-lg rounded-md cursor-pointer"
          >
            <FaCircleArrowRight className="inline-block mr-2" />
            Leer más...
          </button>
        </div>
      </section>

      {/* Talentos, Disciplinas, Premios */}
      <section
        className="h-screen lg:h-[70vh] w-full gap-8
        flex flex-col md:flex-row justify-center
        items-center bg-cover bg-center py-8"
        style={{
          backgroundImage: "url('assets/deportes-fondo.webp') ",
        }}
      >
        {cardsData.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              onClick={() => setActiveCard(isActive ? null : index)}
              className="group cursor-pointer bg-[#0c164ddd] w-96 h-96 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Imagen */}
              <div className="w-full h-full flex justify-center items-center relative">
                <img src={card.img} alt={card.alt} className="w-32" />
              </div>

              {/* Título visible que se oculta si está activo */}
              <h3
                className={`bg-red-600 text-white text-center text-xl italic font-semibold py-2 relative z-10 transition-opacity duration-500 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              >
                {card.title}
              </h3>

              {/* Mantel rojo, visible si está activa o en hover */}
              <div
                className={`absolute left-0 w-full h-full bg-red-600 text-white text-center p-6
        bottom-[-100%] flex items-center justify-center z-20 transition-all duration-800
        ${isActive ? "bottom-[0]" : "group-hover:bottom-[0]"}`}
              >
                <div>
                  <h4 className="text-2xl mb-2 font-bold">{card.title}</h4>
                  <p className="text-md px-4 lg:text-lg font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Area de deportes */}
      <section
        className="h-screen lg:h-[70vh] bg-fixed bg-center bg-cover gap-8
        flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('assets/deportes-fondo-seccion.webp')",
        }}
      >
        <div className="text-white w-full lg:w-3/5 px-4">
          <h3 className="text-3xl lg:text-5xl italic font-semibold text-center my-4 lg:my-10">
            DEPORTES
          </h3>
          <p className="py-6 border-t-4 text-md lg:text-xl text-justify">
            El Área de Deportes, impulsada desde el año 2013 bajo la visión del
            Dr. Javier Saldaña Almazán, ha sido un pilar fundamental en la
            promoción del deporte en el estado de Guerrero. Desde su creación,
            se ha enfocado en consolidar espacios y programas que fomenten la
            actividad física y deportiva como herramientas clave para el
            desarrollo integral de los guerrerenses.
            <br /> <br />
            Con una visión inclusiva y comprometida, esta iniciativa ha
            trabajado en la creación y rehabilitación de infraestructura
            deportiva, la organización de eventos y torneos, así como en la
            implementación de programas que promuevan la formación de talentos
            deportivos y el acceso a prácticas saludables para todas las edades
            y comunidades.
          </p>
        </div>
      </section>

      {/* Sección de video */}
      <section className="h-[60vh] lg:h-[90vh] bg-blue-950 flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-10">
          DEPORTES UAGRO
        </h2>

        <div className="w-full max-w-4xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/6R2yIiJyViw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Destacado */}
      <section
        className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center px-4 py-10"
        style={{
          backgroundImage: "url('assets/deportes-fondo.webp') ",
        }}
      >
        <div className="bg-red-500 text-white text-3xl lg:text-4xl font-bold py-2 px-20 rounded-full mb-10">
          Destacado
        </div>

        <div className="w-full max-w-4xl">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]} // 👈 incluye Navigation
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true} // 👈 activa flechas
            loop={true} // 👈 activa loop infinito
            autoplay={{
              delay: 4000, // cambia de slide cada 4 segundos
              disableOnInteraction: false, // sigue moviéndose aunque el usuario interactúe
            }}
          >
            {noticias.map((noticia) => (
              <SwiperSlide key={noticia.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={noticia.imagen}
                    alt={noticia.nombre}
                    className="w-full h-[70vh] object-top object-cover"
                  />
                  <div className="p-6  text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {noticia.nombre}
                    </h3>
                    <p className="text-gray-600">{noticia.descripcion}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
