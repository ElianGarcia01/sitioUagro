import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getNivelesSuperiores = () =>
  axios.get(`${API}/niveles-superiores?limit=50`);

export const getServiciosImagenes = () =>
  axios.get(`${API}/servicios-imagenes`);

export const getDestacadosDeportes = () =>
  axios.get(`${API}/DestacadoDeportes`);

export const getPaginasSecciones = () => axios.get(`${API}/Paginas`);

export const getTalentos = () => axios.get(`${API}/Talentos`);
