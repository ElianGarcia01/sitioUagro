import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const changeSearch = createAction("school/changeSearch");
const changeRegion = createAction("school/changeRegion");

// Peticion https para obtener la data de productos
const getSchools = createAsyncThunk("school/getSchools", async () => {
  const response = await axios.get(
    "https://strapi.uagro.mx/api/niveles-superiores?limit=50"
  );
  return response.data.docs
});

export { getSchools, changeSearch, changeRegion };
