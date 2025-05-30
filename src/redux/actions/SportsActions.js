import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL desde .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Petición para obtener la data de la página deportes
const getSports = createAsyncThunk("sports/getSports", async () => {
  const response = await axios.get(`${API_BASE_URL}/Paginas`);
  return response.data.docs;
});

// Petición para obtener la data de talentos
const getTalents = createAsyncThunk("sports/getTalents", async () => {
  const response = await axios.get(`${API_BASE_URL}/Talentos`);
  return response.data.docs;
});

// Petición para obtener la data de destacados deportes
const getFeaturedSports = createAsyncThunk("sports/getFeaturedSports", async () => {
  const response = await axios.get(`${API_BASE_URL}/DestacadoDeportes`);
  return response.data.docs;
});

export { getSports, getTalents, getFeaturedSports };
