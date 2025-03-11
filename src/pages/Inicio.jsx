import videoFinal from "../assets/video/finalVideo.mp4"
import CardFlip from "../components/CardFlip/CardFlip"
import Carousel from "../components/Carousel/Carousel"

export default function Inicio() {
    return (
        <>
            {/* VIDEO SECTION */}
            <section className="max-h-[35vh] h-screen md:max-h-[53vh] w-full object-cover relative border-t-4 border-red-400">
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

                <div className="absolute inset-0 bg-black/35 md:bg-black/25"></div>
            </section>

            {/* CARDS FLIP SECTION */}
            <section className="w-full">
                {/* CARDS FLIP (visible en pantallas grandes) */}
                <div>
                    <CardFlip />
                </div>

                {/* CAROUSEL (visible en pantallas pequeñas) */}
                {/* <div className="block md:hidden">
                    <Carousel />
                </div> */}
            </section>

            {/* BANNER IMAGE SECTION */}
            <section className="h-screen w-full relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://dgtidweb.uagro.mx/ejemplo/images/2024/05/15/fondooferta-04.webp')",
                }}
            >
                {/* TÍTULO OFERTA EDUCATIVA */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <img src="https://dgtidweb.uagro.mx/ejemplo/images/2024/05/08/recurso-1.png"
                        alt=""
                        className="h-28" />
                </div>
            </section>



            {/* MESSAGE SECTION */}
            <section
                className="h-screen max-h-[90vh] w-full relative bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://dgtidweb.uagro.mx/ejemplo/images/2024/01/15/fondo_hcu.jpg')",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Contenido de la sección */}
                <div className="h-full w-full flex justify-center items-center text-white">
                    <img src="https://dgtidweb.uagro.mx/ejemplo/images/HCU/logo-hcu.webp" alt="" />
                </div>
            </section>

            {/* SECTION CAROUSEL */}
            <section className="h-[100vh] bg-white">
                <div>

                </div>
            </section>
        </>
    )
}

