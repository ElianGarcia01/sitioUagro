import videoFinal from "../assets/video/finalVideo.mp4"
import CardFlip from "../components/CardFlip/CardFlip"
import Banner from "../assets/images/Banner.webp"
import CardOffer from "../components/CardOffer/CardOffer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import VideoPage from "../components/VideoPage/VideoPage";

// import Carousel from "../components/Carousel/Carousel"

export default function Inicio() {
    return (
        <>
            {/* VIDEO SECTION */}
            <section className="max-h-[50vh] h-screen md:max-h-[53vh] w-full object-cover relative border-t-4 border-red-400">
                <video
                    autoPlay
                    muted
                    loop
                    playsinline
                    className="h-full w-full shadow-2xl object-cover"
                >
                    <source src={videoFinal} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
                <div className="absolute inset-0 bg-black/35 md:bg-black/45"></div>
            </section>

            {/* CARDS FLIP SECTION */}
            <section className="w-full">
                {/* CARDS FLIP (visible en pantallas grandes) */}
                <div>
                    <CardFlip />
                </div>
            </section>

            {/* BANNER IMAGE SECTION */}
            <section className="h-screen w-full relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${Banner})`,
                }}
            >
                {/* TÍTULO OFERTA EDUCATIVA */}
                <div className="absolute top-1/12 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <img src="https://dgtidweb.uagro.mx/ejemplo/images/2024/05/08/recurso-1.png"
                        alt=""
                        className="h-16 lg:h-28" />
                </div>
                <CardOffer />
            </section>

            {/* MESSAGE SECTION */}
            <section
                className="h-screen max-h-[90vh] w-full bg-cover bg-center relative flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://dgtidweb.uagro.mx/ejemplo/images/2024/01/15/fondo_hcu.jpg')",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Contenedor flex para dividir en dos columnas */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-28 w-full h-full px-8">

                    {/* LOGO */}
                    <div className="flex justify-center">
                        <img src="https://dgtidweb.uagro.mx/ejemplo/images/HCU/logo-hcu.webp" alt="" />
                    </div>

                    {/* MENSAJE */}
                    <div className="bg-white h-3/5 lg:h-2/5 w-full lg:w-2/4 rounded-lg shadow-2xl text-black flex flex-col items-center
                    justify-center gap-8 px-6 pb-4">
                        <FontAwesomeIcon icon={faQuoteLeft} className="self-start text-5xl text-[#131837]" />
                        <p className="text-justify italic">“El H. Consejo Universitario como máximo órgano de gobierno es la instancia en la que se analizan, discuten y acuerdan los asuntos institucionales fundamentales de nuestra institución, en los distintos ámbitos de la vida universitaria.”</p>
                        <NavLink className="font-bold text-md italic self-start shadow-2xl bg-[#131837] text-white hover:bg-[#131837]/80 p-2 rounded-lg ">Conoce más...</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

