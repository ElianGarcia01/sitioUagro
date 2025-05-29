import bgImage from "../assets/images/head-consejo.jpg";

export default function HConsejoUniversitario() {
  return (
    <>
      {/* BANNER H.C.U. */}
      <section
        className="h-12 lg:h-52 w-full bg-cover flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></section>

      <section className="px-12 flex flex-col lg:flex-row">
        {/* Seccion mensaje */}
        <div className="lg:w-3/4 py-8">
          <h1 className="py-4 px-12 text-4xl">
            ¿Qué es el Consejo Universitario?
          </h1>

          <p className="px-12 py-4 text-justify text-xl">
            El H. Consejo Universitario como máximo órgano de gobierno es la
            instancia en la que se analizan, discuten y acuerdan los asuntos
            institucionales fundamentales de nuestra institución, en los
            distintos ámbitos de la vida universitaria. Uno de los grandes
            logros de la reforma universitaria en su aspecto legal y normativo
            ha sido la reestructuración de este órgano colegiado, lo que ha
            permitido sesionar en forma regular, periódica y relevante siempre
            con quórum especial. En todas las sesiones se ha tenido una
            asistencia superior al 90% de sus integrantes, lo que da legalidad y
            legitimidad a sus acuerdos.
          </p>

          <p className="px-12 py-4 text-justify text-xl">
            Asimismo, se ha logrado el funcionamiento permanente de sus
            comisiones, emitiendo dictámenes para ser sometidos al pleno del H.
            Consejo Universitario, siendo una importante aportación a la
            práctica legislativa de la universidad pública mexicana. Todos los
            acuerdos sin excepción son publicados puntualmente en la Gaceta
            Universitaria para su cumplimiento y observancia.
          </p>
        </div>
        <div className="lg:w-1/5 flex flex-col justify-center items-center">
          <button
            className="bg-[#192a48] text-white
          w-full text-xl px-4 py-3 cursor-pointer hover:bg-gray-400 rounded-lg mt-4"
          >
            Comisiones
          </button>
          <button
            className="bg-[#192a48] text-white
          w-full text-xl px-4 py-3 cursor-pointer hover:bg-gray-400 rounded-lg mt-4"
          >
            Ley, Estatuto General y Reglamentos Vigentes
          </button>
          <button
            className="bg-[#192a48] text-white
          w-full text-xl px-4 py-3 cursor-pointer hover:bg-gray-400 rounded-lg mt-4"
          >
            Consejeros Universitarios
          </button>
          <button
            className="bg-[#192a48] text-white
          w-full text-xl px-4 py-3 cursor-pointer hover:bg-gray-400 rounded-lg mt-4"
          >
            Gacetas
          </button>
        </div>
      </section>

      {/* Seccion H.C.U. */}
      <section
        className="min-h-screen w-full bg-cover bg-center relative flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://dgtidweb.uagro.mx/ejemplo/images/2024/01/15/fondo_hcu.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* LOGO */}
        <div className="mt-10">
          <h1 className="text-4xl text-center">Estructura Organica del <br /> H.Consejo Universitario</h1>
          <img
            src="https://uagro.mx/images/HCU/organigrama.png"
            alt="H.Consejo Universitario"
          />
        </div>
      </section>
    </>
  );
}
