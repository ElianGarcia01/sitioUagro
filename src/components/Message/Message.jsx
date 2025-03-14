
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

const Message = ({message}) => {
    return (
        <div className="bg-white h-full w-full rounded-lg shadow-2xl text-black flex flex-col items-center justify-center gap-8 px-6 pb-4 pt-4">
            <FontAwesomeIcon icon={faQuoteLeft} className="self-start text-4xl lg:text-5xl text-[#131837]" />
            <p className="text-justify italic">“{message}”</p>
            <NavLink className="font-bold text-md italic self-start shadow-2xl bg-[#131837] text-white
            hover:bg-[#131837]/80 p-2 rounded-lg">Conoce más...</NavLink>
        </div>
    )
}

export default Message