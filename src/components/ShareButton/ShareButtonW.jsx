import React from "react"
import { FaWhatsapp } from "react-icons/fa6";

const ShareButtonW = ({ url }) => {
  const handleShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, "_blank", "width=600,height=400");
  }

  return (
    <div>
      <button href="#" className="h-auto bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg cursor-pointer" onClick={handleShare}>
        <FaWhatsapp className="inline-block mr-0 text-xl lg:text-2xl text-white" />
      </button>
    </div>
  )
}

export default ShareButtonW
