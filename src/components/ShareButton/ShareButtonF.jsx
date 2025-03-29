import React from "react";
import { FaFacebook } from "react-icons/fa6";

const ShareButtonF = ({ url, title }) => {
  const handleShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="w-32 text-center rounded-lg px-2 py-2 mt-6 text-white bg-blue-500 hover:bg-blue-600 transition duration-300 cursor-pointer">
      <a onClick={handleShare} className="w-full h-full">
        <FaFacebook className="inline-block mr-2" />
        Facebook
      </a>
    </div>
  );
};

export default ShareButtonF
