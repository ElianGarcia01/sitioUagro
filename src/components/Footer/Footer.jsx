import React from "react"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaPhone, FaEnvelope } from "react-icons/fa"


function Footer() {
    return (
        <div className="text-md border-black bg-[#131837] text-white flex justify-between flex-wrap gap-8 px-6 py-4 md:justify-around md:p-8">
            <div>
                <ul className="space-y-4">
                    <li className="font-semibold text-2xl md:text-3xl">Contacto:
                    </li>
                    <li>Av. Javier Méndez Aponte 1 Fracc. Servidor Agrario
                        C.P. 39070
                        Chilpancingo de los Bravo, Gro.
                    </li>
                    <li>Email: rectoria@uagro.mx
                    </li>
                    <li>01(747) 471-93-10 Ext. 3000
                    </li>
                </ul>
            </div>

            <div>
                <ul className="space-y-4">
                    <li className="font-semibold text-2xl md:text-3xl">Síguenos:
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="inline-block mr-0" />
                            <span className="lg:inline ml-2">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="inline-block mr-0" />
                            <span className="lg:inline ml-2">Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png" alt="X Logo" width="17" className="inline-block mr-0" />
                            <span className="lg:inline ml-2">(Twitter)</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="inline-block mr-0" />
                            <span className="lg:inline ml-2">Youtube</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Footer