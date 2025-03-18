import videoFinal from "../assets/video/finalVideo.mp4"
import CardFlip from "../components/CardFlip/CardFlip"
import Banner from "../assets/images/Banner.webp"
import CardOffer from "../components/CardOffer/CardOffer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Message from "../components/Message/Message"
import Carousel from "../components/Carousel/Carousel"

export default function Inicio() {

    let HConsejoMensaje = "El H. Consejo Universitario como máximo órgano de gobierno es la instancia en la que se analizan, discuten y acuerdan los asuntos institucionales fundamentales de nuestra institución, en los distintos ámbitos de la vida universitaria."

    let ValoresUagroMensaje = '"Valores UAGro" es una campaña integral diseñada para inspirar y fortalecer los valores fundamentales entre los estudiantes universitarios del estado de Guerrero. Con el objetivo de cultivar una comunidad académica comprometida y ética, la campaña se centra en promover la integridad, la responsabilidad, el respeto y la solidaridad'


    return (
        <>
            {/* VIDEO SECTION */}
            <section className="max-h-[50vh] h-screen md:max-h-[53vh] w-full object-cover relative border-t-4 border-red-400">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full shadow-2xl object-cover"
                >
                    <source src={videoFinal} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
                <div className="absolute inset-0 bg-black/35 md:bg-black/45"></div>
            </section>

            {/* CARDS FLIP SECTION */}
            <section className="w-full h-ful">
                <CardFlip />
            </section>

            {/* BANNER IMAGE SECTION */}
            <section className="h-screen lg:h-[80vh] w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat "
                style={{
                    backgroundImage: `url(${Banner})`,
                }}
            >
                {/* TÍTULO OFERTA EDUCATIVA */}
                <div className="py-16 lg:py-24">
                    <img
                        src="https://dgtidweb.uagro.mx/ejemplo/images/2024/05/08/recurso-1.png"
                        alt="Oferta Educativa"
                        className="h-14 lg:h-28" // Ajusta el tamaño en pantallas pequeñas
                    />
                </div>

                {/* CARDS COMPONENT */}
                <CardOffer />
            </section>

            {/* SECCION H.CONSEJO UNIVERSITARIO */}
            <section className="h-screen w-full bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('https://dgtidweb.uagro.mx/ejemplo/images/2024/01/15/fondo_hcu.jpg')",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center space-y-20 lg:gap-28 px-8">

                    {/* LOGO */}
                    <div className="flex justify-center items-center mt-10 lg:w-1/3">
                        <img src="https://dgtidweb.uagro.mx/ejemplo/images/HCU/logo-hcu.webp" alt="H. Consejo Universitario" />
                    </div>

                    {/* MENSAJE */}
                    <div className="lg:w-2/3">
                        <Message message={HConsejoMensaje}></Message>
                    </div>
                </div>
            </section>

            {/* SECCION OFERTA EDUCATIVA (CAROUSEL) */}
            <section className="h-full w-full bg-white py-6 px-3 lg:px-8 flex flex-col justify-center items-center">
                <h3 className="text-center text-4xl font-light pb-8">Eventos y Convocatorias</h3>
                <Carousel></Carousel>
                <button className="bg-teal-300 self-center mt-8 px-4 py-2 text-white rounded-lg cursor-pointer">Click Aquí</button>
            </section>

            {/* SECCION ORGULLOSAMENTE UAGRO */}
            <section className="min-h-screen lg:min-h-[85vh] py-8 w-full bg-cover bg-center relative flex justify-center items-center"
                style={{
                    backgroundImage: "url('https://dgtidweb.uagro.mx/ejemplo/images/portadarectoria.jpg')",
                    backgroundAttachment: "fixed"
                }}>

                <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center px-8 space-y-8 shadow-2xl lg:shadow-none gap-10">

                    {/* MENSAJE */}
                    <div className="flex flex-col justify-center items-center h-full w-full lg:w-1/2 gap-10">
                        <h3 className="text-center font-light text-white text-3xl lg:text-5xl">#Orgullosamente <span className="text-red-500">Uagro</span></h3>
                        <div className="bg-white h-3/5 lg:h-2/5 w-full rounded-lg shadow-2xl text-black flex flex-col items-center justify-center gap-4 px-6 py-10">
                            <FontAwesomeIcon icon={faQuoteLeft} className="self-start text-4xl lg:text-5xl text-[#131837]/90" />
                            <p className="text-justify italic">“En los últimos años, hemos aumentado el número y la calidad de nuestros posgrados, hasta ubicarnos en el cuarto lugar de universidades de la región Centro Sur con mayor número de ellos. Los 54 posgrados reconocidos por su calidad académica nos llenan de satisfacción, pero también nos comprometen a seguir haciendo las cosas bien, como merece el pueblo de Guerrero.”</p>
                        </div>
                    </div>

                    <div className="w-full h-full lg:w-1/2 flex justify-center items-center">
                        <img src="https://dgtidweb.uagro.mx/ejemplo/images/premios/ranking.jpeg" alt="Ranking Uagro" className="rounded-lg h-60 w-60 md:w-80 md:h-80 lg:h-[550px] lg:w-[550px]" />
                    </div>
                </div>
            </section>

            {/* SECCION VALORES UAGRO */}
            <section className="bg-white w-full h-full  bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row justify-center items-center py-16 space-y-12 px-8 lg:gap-28"
                style={{
                    backgroundImage: "url('https://dgtidweb.uagro.mx/ejemplo/images/seccion-valores/valores-fondo-35.webp"
                }}>
                
                {/* LOGO VALORES UAGRO */}
                <div className="h-full w-full lg:w-1/3 flex justify-center items-center rounded-lg">
                    <img src="https://dgtidweb.uagro.mx/ejemplo/images/seccion-valores/valores-logo-34.webp" alt="Valores Uagro" className="w-[200px] h-[250px] md:w-[300px] md:h-[350px]" />
                </div>

                {/* MENSAJE VALORES UAGRO */}
                <div className="h-full w-full lg:w-2/3">
                    <Message message={ValoresUagroMensaje}></Message>
                </div>
            </section>
        </>
    )
}