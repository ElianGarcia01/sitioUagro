import React from "react";
import { FaFacebook } from "react-icons/fa6";

const ShareButtonF = ({ url, title }) => {
  const handleShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(title)}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  return (
    <div>
      <button href="#" className="h-12 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg cursor-pointer" onClick={handleShare}>
        <FaFacebook className="inline-block mr-0 text-2xl text-white" />
      </button>
    </div>
  );
};

export default ShareButtonF;
