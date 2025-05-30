import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const changeSearch = createAction("school/changeSearch");
const changeRegion = createAction("school/changeRegion");

const getSchools = createAsyncThunk("school/getSchools", async () => {
  const response = await axios.get(`${API_BASE_URL}/niveles-superiores?limit=50`);
  return [...response.data.docs].reverse();
});

const getBachilleratos = createAsyncThunk("school/getBachilleratos", async () => {
  const response = await axios.get(`${API_BASE_URL}/Bachilleratos`);
  return response.data.docs;
});

const getServices = createAsyncThunk("school/getServices", async () => {
  const response = await axios.get(`${API_BASE_URL}/servicios-imagenes`);
  return [...response.data.docs].reverse();
});

const getOffers = createAsyncThunk("school/getOffers", async () => {
  const response = await axios.get(`${API_BASE_URL}/oferta`);
  return response.data.docs;
});


export { getSchools, changeSearch, changeRegion, getServices, getOffers, getBachilleratos };
