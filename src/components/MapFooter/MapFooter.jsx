import { useState } from "react";
import { FaMap, FaMapLocationDot } from "react-icons/fa6";

const GoogleMap = ({ address }) => {
  const [showMap, setShowMap] = useState(false);
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      {!showMap ? (
        <button
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setShowMap(true)}
        >
          Ver mapa <FaMapLocationDot className="inline-block" />
        </button>
      ) : (
        <iframe
          title="Google Maps"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {showMap && (
              <button
        className="cursor-pointer hover:text-red-500 mt-4"
        onClick={() => setShowMap(false)}
      >
        Ocultar mapa <FaMap className="inline-block" />
      </button>
      )}
    </div>
  );
};
export default GoogleMap;
