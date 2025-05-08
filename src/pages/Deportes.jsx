import { FaCircleArrowRight, FaCircleRight } from "react-icons/fa6";
import logo from "../assets/images/logoaguilas.webp";

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

export default function Deportes() {
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
        className="min-h-screen bg-cover bg-center gap-8 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('assets/slider02.webp') ",
        }}
      >
        <div className="h-32 w-64 mt-20">
          <img src={logo} alt="" className="w-full h-full" />
        </div>

        <div className="w-3/4">
          <p className="text-white text-center text-xl">
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
        className="h-[70vh] w-full gap-8
  flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('assets/deportes-fondo.webp') ",
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="group bg-[#0c164ddd] w-96 h-80 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Contenido visible */}
            <div className="w-full h-full flex justify-center items-center relative">
              <img src={card.img} alt={card.alt} className="w-32" />
            </div>

            {/* Título que debe quedar visible siempre */}
            <h3 className="bg-red-600 text-white text-center text-xl italic font-semibold py-2 relative z-10">
              {card.title}
            </h3>

            {/* Mantel rojo que cubre solo la imagen */}
            <div
              className="absolute left-0 w-full h-full bg-red-600 text-white text-center p-6
               bottom-[-100%] group-hover:bottom-[2.5rem] transition-all duration-800
               flex items-center justify-center z-20"
            >
              <div>
                <h4 className="text-2xl mb-2 font-bold"> {card.title}</h4>
                <p className="text-lg font-ligth">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Descripcion del area de deportes */}
      <section
        className="h-[70vh] bg-cover bg-center gap-8 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('assets/deportes-fondo-seccion.webp') ",
        }}
      >
        <div className="text-white w-1/2">
          <h3 className="text-5xl italic font-semibold text-center mb-10">
            DEPORTES
          </h3>
          <p className="py-6 border-t-4 text-xl text-justify">
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
    </>
  );
}
