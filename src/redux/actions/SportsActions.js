import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Peticion https para obtener la data de la pagina deportes
const getSports = createAsyncThunk("sports/getSports", async () => {
  const response = await axios.get(
    "https://strapi.uagro.mx/api/Paginas"
  );
return response.data.docs
})

// Peticion https para obtener la data de talentos
const getTalents = createAsyncThunk("sports/getTalents", async () => {
  const response = await axios.get(
    "https://strapi.uagro.mx/api/Talentos"
  );
return response.data.docs
})

// Peticion https para obtener la data de destacado deportes
const getFeaturedSports = createAsyncThunk("sports/getFeaturedSports", async () => {
  const response = await axios.get(
    "https://strapi.uagro.mx/api/DestacadoDeportes"
  );
return response.data.docs
})

export { getSports, getTalents, getFeaturedSports }
