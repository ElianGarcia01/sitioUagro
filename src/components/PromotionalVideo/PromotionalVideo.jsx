import { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

export default function PromotionalVideo({ videoUrl }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center relative">
        <span className="absolute left-[5px] w-96 border-t-4 border-red-500"></span>

        <button
          onClick={() => setShowModal(true)}
          className="relative w-1/3 px-4 py-2 bg-blue-950 text-white
          text-center text-2xl font-semibold rounded-3xl cursor-pointer
          flex items-center justify-center"
        >
          <FaRegPlayCircle className="inline-block mr-2" />
          Video Promocional
        </button>
        <span className="absolute right-[5px] w-96 border-t-4 border-red-500"></span>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-4/5 h-4/5">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-2 right-5 text-white text-2xl"
            >
              ×
            </button>
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              {/* Reproducir el video de YouTube en el modal */}
              <iframe
                width="100%"
                height="100%"
                src={videoUrl} // Usamos el videoUrl recibido como prop
                title="Promotional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
