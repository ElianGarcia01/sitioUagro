import { useState, useRef, useEffect } from "react";
import { FaCirclePlus } from "react-icons/fa6";

export default function InstitutionalAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Principios Institucionales",
      content: `Los principios que orientan el camino de la UAGro están profundamente arraigados en su historia y reflejan su compromiso de servir a la sociedad guerrerense. Con un enfoque especial en la inclusión, la universidad pone en relieve su dedicación a trabajar en favor de los sectores más desfavorecidos y vulnerables de la sociedad. Este compromiso se manifiesta tanto en la formación de estudiantes de bachillerato, licenciatura y posgrado, como en su labor de extensión, y se muestra en nuestro lema: “Universidad de calidad con inclusión social”. Cabe señalar algunos de los principios que guían las acciones:`,
      bullets: [
        "Autonomía",
        "Bien común",
        "Derechos universitarios",
        "Sostenibilidad",
        "Calidad y pertinencia",
        "Internacionalización",
        "Gobernabilidad",
      ],
    },
    {
      title: "Misión",
      content: `La UAGro, a través de su Ley Orgánica y su Estatuto General, ha establecido un conjunto de objetivos esenciales que definen la misión de nuestra institución y proporcionan una guía clara para nuestras acciones y esfuerzos. Nuestra misión, como se refleja en los objetivos, es:`,
      bullets: [
        "Ofrecer servicios en educación media superior y superior.",
        "Realizar investigación, fomentar el desarrollo tecnológico e innovación.",
        "Contribuir al desarrollo del entorno mediante la extensión de sus servicios.",
        "Coadyuvar al estudio, preservación, acrecentamiento y difusión de la cultura.",
        "Coadyuvar al estudio, preservación, acrecentamiento y difusión de la cultura.",
        "Vincularse con la sociedad para responder a sus necesidades y demandas de orden social, económico, cultural, ambiental y tecnológico.",
        "Promover la inclusión social y el desarrollo sustentable",
        "Dar prioridad a la problemática estatal, atender a los sectores más desfavorecidos y contribuir por sí o en coordinación con otras entidades de los sectores público, social y privado al desarrollo nacional.",
        "Tener como prioridad promover y respetar los derechos humanos, dentro y fuera de la universidad",
      ],
    },
    {
      title: "Visión",
      content: [
        "La visión 2027 define las características clave que identificarán el estado de la UAGro al finalizar la gestión 2023-2027. Esta visión se fundamenta en garantizar los principios asociados a los derechos universitarios, la calidad educativa y la pertinencia de nuestros programas y actividades.Además, está orientada a adaptarse y responder a los cambios significativos que están redefiniendo la educación superior en Guerrero, en nuestro país y en el contexto global. En esta perspectiva se propone la Visión UAGro 2027 en los siguientes términos.",
        '"La Universidad Autónoma de Guerrero en el año 2027 es un referente a nivel nacional e internacional por su contribución a la mejora de la calidad educativa, inclusión, equidad y un compromiso con la responsabilidad social y el desarrollo sustentable de la sociedad."',
        "Para lograr esta visión es necesario apoyarse en una estructura académica y administrativa funcional y acreditada, comprometida con el quehacer universitario, y el ejercicio con transparencia y rendición de cuentas.",
      ],
    },
    {
      title: "Objetivo general",
      content:
        "Transformar el proceso de enseñanza aprendizaje mediante la innovación y mejora del modelo educativo, para adaptarse a las necesidades y demandas de la sociedad actual y fomentar un aprendizaje activo y significativo. Objetivos específicos:",
      bullets: [
        "Investigar las tendencias actuales del aprendizaje y sus paradigmas emergentes para actualizar el modelo educativo.",
        "Incorporar nuevos elementos y metodologías al modelo educativo para mejorar la eficacia y eficiencia del proceso de enseñanza-aprendizaje.",
        "Evaluar la efectividad del modelo educativo actualizado en su contribución a la impartición de la cátedra y su capacidad para fomentar el aprendizaje activo y significativo.",
        "Desarrollar y fomentar habilidades para el futuro en los estudiantes, tales como pensamiento crítico, resolución de problemas, creatividad, colaboración y comunicación, para que puedan enfrentar los desafíos de un mundo en constante cambio y evolución.",
      ],
    },
    {
      title: "Políticas transversales",
      content: `Las políticas transversales buscan canalizar y guiar el trabajo de la comunidad universitaria hacia las metas que la institución se ha propuesto alcanzar. Con base en el análisis de los retos y oportunidades detectados en el entorno externo e interno, se han definido cinco políticas. Estas políticas están en total armonía con la misión, visión y principios de la Universidad, y se incorporan de manera transversal en el PDI.`,
      bullets: [
        "Mejora Continua",
        "Bienestar Estudiantil",
        "Formación Integral",
        "Desarrollo Sustentable",
        "Cultura de Paz",
      ],
    },
  ];
  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (ref) {
        if (openIndex === idx) {
          ref.style.height = ref.scrollHeight + "px";
        } else {
          ref.style.height = "0px";
        }
      }
    });
  }, [openIndex]);

  return (
    <div className="w-full px-6 md:px-28 mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-3 rounded-2xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => toggle(index)}
            className={`w-full px-4 py-3 cursor-pointer text-left font-semibold flex justify-between items-center text-white transition-colors duration-300 rounded-t-2xl focus:outline-none active:scale-100 ${
              openIndex === index
                ? "bg-[#2e456e]"
                : "bg-black/70 hover:bg-black/60"
            }`}
          >
            <span className="font-bold text-xl flex items-center gap-2">
              <FaCirclePlus /> {item.title}
            </span>
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden bg-black/70 text-white px-4 transition-all duration-500 ease-in-out"
            style={{ height: "0px" }}
          >
            <div className="py-4">
              <h1 className="text-3xl font-semibold mb-3">{item.title}</h1>

              {Array.isArray(item.content) ? (
                item.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-xl">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="mb-4 text-xl">{item.content}</p>
              )}

              {item.bullets && (
                <ul className="list-disc ml-6 text-xl">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
