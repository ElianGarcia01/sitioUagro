import React from "react"
import { FaWhatsapp } from "react-icons/fa6";

const ShareButtonW = ({ url }) => {
  const handleShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, "_blank", "width=600,height=400");
  }

  return (
    <div className="w-32 text-center rounded-lg px-2 py-2 mt-6 text-white bg-green-500 hover:bg-green-600 transition duration-300 cursor-pointer">
      <a onClick={handleShare} className="w-full h-full">
        Whatsapp
        <FaWhatsapp className="inline-block ml-2" />
      </a>
    </div>
  )
}

export default ShareButtonW
