export default function Inicio() {
  return (
    <>
      {/* BANNER CONOCENOS */}
      <section
        className="h-12 lg:h-52 w-full bg-cover flex justify-center items-center"
        style={{
          // Background del banner conocenos
          backgroundImage:
            "url('https://dgtidweb.uagro.mx/ejemplo/images/conocenos/head_conocenos_00.jpg') ",
        }}
      ></section>

      {/* MENSAJE BIENVENIDA */}
      <section
        className="min-h-screen w-full bg-cover bg-center flex flex-col lg:flex-row items-center"
        style={{
          // Background de la seccion de mensaje de bienvenida
          backgroundImage:
            "url('https://dgtidweb.uagro.mx/ejemplo/images/2024/07/17/fondo-azul-02.webp')",
        }}
      >
        {/* Foto del Dr. Javier Saldaña */}
        <div className="h-full w-full lg:w-1/3 flex justify-end">
          <img
            src="https://dgtidweb.uagro.mx/ejemplo/images/2024/07/17/jsa-09.webp"
            alt="Dr. Javier Saldaña"
            className="w-auto h-auto lg:h-[85vh]"
          />
        </div>
        <div className="h-full w-full lg:w-2/3 px-3 lg:px-15 py-5 relative">
          <h2 className="font-light text-white text-2xl lg:text-4xl lg:p-5">
            Mensaje Bienvenida
          </h2>
          <img
            src="https://dgtidweb.uagro.mx/ejemplo/images/2024/07/17/linea-encabezado-03.png"
            alt="Linea encabezado"
            className="w-full h-auto absolute top-7 lg:top-8 lg:px-17 right-0"
          />

          <p className="text-white my-10 lg:px-5 font-light text-md lg:text-xl">
            DR. JAVIER SALDAÑA ALMAZAN
            <br />
            RECTOR
          </p>

          <p className="text-white lg:pr-15 lg:pl-5 lg:pb-10 text-justify text-md lg:text-xl">
            La Universidad Autónoma de Guerrero es una Institución joven, pero a
            la vez pujante y en constante transformación. La máxima casa de
            estudios de Guerrero nace producto de la lucha de las clases
            populares de la entidad por una mejor educación y por una
            institución que coadyuve en el desarrollo económico, político y
            social del Estado de Guerrero. <br />
            <br />
            Las condiciones actuales que enfrenta la educación superior
            mexicana, entre las que destaca la drástica competencia en una
            economía globalizada y el desarrollo vertiginoso de la ciencia y la
            tecnología, exigen que las Instituciones ofrezcan un servicio de
            calidad. Ello implica, entre otros rubros significantes, que la
            acción educativa en este nivel deba centrarse en la pertinencia
            social, la eficiencia y la eficacia. <br />
            <br />
            Conscientes de que nuestra labor fundamental es formar ciudadanos
            altamente competitivos en el mercado laboral, igualmente importante
            es que dichos profesionales cuenten con un elevado compromiso
            social, sobre todo con los sectores que le dieron origen a nuestra
            Universidad: los sectores marginados. Ese es el reto que nos hemos
            planteado, alta calidad académica y elevado compromiso social.
          </p>
        </div>
      </section>
    </>
  );
}
