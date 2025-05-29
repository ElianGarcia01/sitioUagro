import { useState } from "react";

const historiaParrafos = [
  "La Universidad Autónoma de Guerrero (UAGro), como institución pública de educación superior, ha experimentado un proceso histórico marcado por su compromiso con el desarrollo educativo, social y cultural del estado de Guerrero, México. Fundada inicialmente como la Universidad de Guerrero en 1960, su creación respondió a la necesidad de contar con una institución autónoma que atendiera la demanda creciente de educación superior en la región.",
  "Desde sus inicios, la universidad ha mantenido una estrecha relación con los movimientos sociales y las luchas populares del estado, lo que la convirtió en un espacio de pensamiento crítico, resistencia y transformación social. Durante las décadas de 1970 y 1980, la UAGro vivió intensos momentos de efervescencia política, caracterizados por la participación activa de estudiantes y profesores en la vida política del estado, así como por conflictos internos relacionados con su modelo de gobernanza y autonomía.",
  "La institución adoptó un modelo conocido como \"universidad pueblo\", que promovía una estructura participativa, incluyente y con un fuerte enfoque social, lo cual generó tanto admiración como críticas. A lo largo de los años, la universidad ha consolidado su infraestructura académica y administrativa, ampliando su cobertura con unidades académicas en diversas regiones del estado.",
  "En 2012, la universidad reformó su Ley Orgánica y adoptó oficialmente el nombre de Universidad Autónoma de Guerrero, fortaleciendo su compromiso con una educación de calidad, con perspectiva humanista, científica y socialmente responsable. Actualmente, la UAGro ofrece programas de licenciatura, posgrado, investigación y vinculación social, posicionándose como una de las instituciones educativas más importantes del sur de México.",
  "La historia de la UAGro es, en esencia, la historia de una comunidad universitaria comprometida con la transformación de Guerrero, que ha enfrentado desafíos con valentía y ha trabajado incansablemente por el acceso equitativo a la educación y la construcción de una sociedad más justa y solidaria."
];

const tabs = [
  { title: "Historia", content: historiaParrafos },
  { title: "Escudo", content: ["Contenido del Escudo..."] },
  { title: "Himno universitario", content: ["Contenido del Himno..."] },
  { title: "Valores y principios", content: ["Contenido de Valores y principios..."] },
  { title: "Organigrama", content: ["Contenido del Organigrama..."] },
];

export default function UAGroTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const paragraphsPerPage = 2;

  const handleTabClick = (index) => {
    setActiveTab(index);
    setCurrentPage(1); // Reiniciar a la página 1 al cambiar de pestaña
  };

  const renderContent = () => {
    const content = tabs[activeTab].content;

    // Si es "Historia", mostrar con paginación
    if (tabs[activeTab].title === "Historia") {
      const totalPages = Math.ceil(content.length / paragraphsPerPage);
      const startIndex = (currentPage - 1) * paragraphsPerPage;
      const visibleParagraphs = content.slice(startIndex, startIndex + paragraphsPerPage);

      return (
        <div>
          <div className="space-y-4">
            {visibleParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md border cursor-pointer ${
                  currentPage === i + 1
                    ? "bg-blue-900 text-white"
                    : "bg-white text-blue-900 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Otras pestañas, sin paginación
    return (
      <div className="space-y-4">
        {content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Pestañas */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 font-bold rounded-md cursor-pointer transition ${
              activeTab === index
                ? "bg-white text-blue-900 shadow"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div className="p-6 text-justify">{renderContent()}</div>
    </div>
  );
}
