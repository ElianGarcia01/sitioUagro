import EducationalOffer from "../components/EducationalOffer/EducationalOffer";

export default function Licenciaturas() {
  return (
    <>
      {/* BANNER NIVEL LICENCIATURA */}
      <section
        className="h-[7.5vh] lg:h-[27.5vh] bg-contain bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://dgtidweb.uagro.mx/ejemplo/images/2024/10/23/head-superior.jpg') ",
        }}
      ></section>

      {/* SECCION DE BUSQUEDA */}
      <section className="flex flex-col lg:flex-row gap-8 px-12 h-[20vh] w-full">
        <a href="" className="w-full h-full"><img src="https://dgtidweb.uagro.mx/ejemplo/images/2025/01/31/busqueavanzada-02.png" alt="Busqueda Avanzada" /></a>
        <a href="" className="w-full h-full"><img src="https://dgtidweb.uagro.mx/ejemplo/images/2025/01/31/territoriouagro-02.png" alt="Territorio Uagro" /></a>
        <a href="" className="w-full h-full"><img src="https://dgtidweb.uagro.mx/ejemplo/images/Licenciaturas/img_1.png" alt="Direccion General de Educacion Superior" /></a>
      </section>

      <section className="min-h-screen w-full">
        <EducationalOffer />
      </section>
    </>
  );
}
