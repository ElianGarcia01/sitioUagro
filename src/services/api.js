import axios from "axios"

const API = import.meta.env.VITE_API_URL

export const getNivelesSuperiores = () =>
  axios.get(`${API}/niveles-superiores?limit=50`)

export const getServiciosImagenes = () =>
  axios.get(`${API}/servicios-imagenes`)
