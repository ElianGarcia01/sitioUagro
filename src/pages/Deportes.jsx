import { FaCircleArrowRight } from "react-icons/fa6";
import logo from "../assets/images/logoaguilas.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getDestacadosDeportes } from "../services/api";
import { getPaginasSecciones } from "../services/api";
import { getTalentos } from "../services/api";
import ClipLoader from "react-spinners/ClipLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Deportes() {
  const [activeCard, setActiveCard] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPage] = useState([]);
  const [talents, setTalents] = useState([]);
  const [imgLoaded, setImgLoaded] = useState(false); // Estado de carga para cada imagen

  useEffect(() => {
    const getDataNews = async () => {
      try {
        const response = await getDestacadosDeportes();
        const newsData = response.data.docs;
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getDataNews();
  }, []);

  useEffect(() => {
    const getDataPage = async () => {
      try {
        const response = await getPaginasSecciones();
        const PageData = response.data.docs;
        setPage(PageData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getDataPage();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getTalentos();
        const ReponseData = response.data.docs;
        setTalents(ReponseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      {/* Banner Deportes */}
      <section
        className="h-12 lg:h-52 w-full bg-cover flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://uagro.mx/images/derportes/header-deportes.webp') ",
        }}
      >
        {pages.length > 0 && pages[0].Pagina ? (
          <h1 className="text-white lg:py-4 px-8 lg:px-13 rounded-2xl bg-[#050d3c] text-xl lg:text-7xl font-bold italic text-center">
            {pages[0].Pagina}
          </h1>
        ) : (
          <div className="flex justify-center items-center mb-10">
            <Skeleton
              count={1}
              height={100}
              width={550}
              baseColor="#444"
              highlightColor="#666"
              style={{ borderRadius: "1rem" }}
            />
          </div>
        )}
      </section>

      {/* Aguilas Uagro */}
      <section
        className="h-full pb-14 lg:min-h-screen bg-cover bg-center gap-8 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('assets/slider02.webp') ",
        }}
      >
        {/* Logo */}
        <div className="h-24 md:h-32 w-56 lg:w-64 mt-20">
          <img src={logo} alt="" className="w-full h-full" />
        </div>

        {/* Descripcion */}
        <div className="w-3/5">
          {pages.length > 0 && pages[0].Seccion[0]?.descripcion ? (
            <h1 className="text-white text-center text-md lg:text-xl">
              {pages[0].Seccion[0].descripcion}
            </h1>
          ) : (
            <Skeleton
              count={3}
              height={24}
              baseColor="#444"
              highlightColor="#666"
              style={{ borderRadius: "1rem" }}
            />
          )}
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
        {talents.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              onClick={() => setActiveCard(isActive ? null : index)}
              className="group rounded-2xl cursor-pointer bg-[#000934eb] w-96 h-96 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Imagen */}
              <div className="w-full h-full flex justify-center items-center relative">
                {!imgLoaded && (
                  <div className="absolute">
                    <ClipLoader color="#ffffff" size={40} />
                  </div>
                )}

                <img
                  src={card.image.url}
                  alt={card.title}
                  className={`w-32 transition-opacity duration-500 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImgLoaded(true)}
                />
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

      {/* Descripcion - deportes */}
      <section
        className="h-screen lg:h-[70vh] bg-fixed bg-center bg-cover gap-8
        flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('assets/deportes-fondo-seccion.webp')",
        }}
      >
        <div className="text-white w-full lg:w-3/5 px-4">
          {pages.length > 0 && pages[0].Seccion[1]?.nombre ? (
            <h3 className="text-3xl lg:text-5xl italic font-semibold text-center my-4 lg:my-10">
              {pages[0].Seccion[1].nombre}
            </h3>
          ) : (
            <div className="flex justify-center items-center my-4 lg:my-10">
              <Skeleton
                count={1}
                height={54}
                width={250}
                baseColor="#444"
                highlightColor="#666"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          )}
          {pages.length > 0 && pages[0].Seccion[1]?.descripcion ? (
            <p className="py-6 border-t-4 text-md lg:text-2xl font-light text-justify whitespace-pre-line">
              {pages[0].Seccion[1].descripcion}
            </p>
          ) : (
            <Skeleton
              count={3}
              height={24}
              baseColor="#444"
              highlightColor="#666"
              style={{ borderRadius: "1rem" }}
            />
          )}
        </div>
      </section>

      {/* Sección de video */}
      <section className="h-[60vh] lg:h-[90vh] bg-blue-950 flex flex-col items-center justify-center px-4">
        {pages.length > 0 && pages[0].Seccion[2]?.nombre ? (
          <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-10">
            {pages[0].Seccion[2].nombre}
          </h2>
        ) : (
          <div className="flex justify-center items-center mb-10">
            <Skeleton
              count={1}
              height={54}
              width={250}
              baseColor="#444"
              highlightColor="#666"
              style={{ borderRadius: "1rem" }}
            />
          </div>
        )}

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
        {pages.length > 0 && pages[0].Seccion[3]?.nombre ? (
          <h3 className="bg-red-500 text-white text-4xl lg:text-4xl font-bold py-2 px-20 rounded-xl mb-10">
            {pages[0].Seccion[3].nombre}
          </h3>
        ) : (
          <div className="flex justify-center items-center mb-10">
            <Skeleton
              count={1}
              height={54}
              width={250}
              baseColor="#444"
              highlightColor="#666"
              style={{ borderRadius: "1rem" }}
            />
          </div>
        )}

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
            {news.map((noticia) => (
              <SwiperSlide key={noticia._id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Imagen */}
                  <div className="w-full h-full flex justify-center items-center relative">
                    {!imgLoaded && (
                      <div className="absolute">
                        <ClipLoader color="#000080" size={40} />
                      </div>
                    )}

                    <img
                      src={noticia.image.url}
                      alt={noticia.title}
                      className={`w-full h-[70vh] object-top object-cover transition-opacity duration-500 ${
                        imgLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setImgLoaded(true)}
                    />
                  </div>

                  <div className="p-6  text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {noticia.title}
                    </h3>
                    <p className="text-gray-600">
                      {noticia.description.length > 120
                        ? noticia.description.slice(0, 110) + "..."
                        : noticia.description}
                    </p>
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
