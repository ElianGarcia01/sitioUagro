import { createReducer } from "@reduxjs/toolkit";
import { changeRegion, changeSearch, getSchools } from "../actions/EduActions";

export const statusHttp = {
  IDLE: "idle",
  SUCCEDED: "succeded",
  FAILE: "failed",
  PENDING: "pending",
};

const schoolsState = {
  schools: [],
  status: statusHttp.IDLE,
  error: null,
};

const initialState = {
  schoolsState: schoolsState,
  region: "Todas",
  search: "",
};

export const EduReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeRegion, (state, action) => {
    state.region = action.payload;
    console.log("payload recibido:", action.payload);
    
  });

  builder.addCase(changeSearch, (state, action) => {
    state.search = action.payload;
  });

  builder.addCase(getSchools.fulfilled, (state, action) => {
    console.log("La solicitud fue exitosa");
    const schoolsState = state.schoolsState;
    schoolsState.schools = action.payload;
    schoolsState.status = statusHttp.SUCCEDED;
  });

  builder.addCase(getSchools.pending, (state) => {
    console.log("La solicitud fue pending");
    const schoolsState = state.schoolsState;
    schoolsState.status = statusHttp.PENDING;
  });

  builder.addCase(getSchools.rejected, (state, action) => {
    console.log("La solicitud fue error");
    const schoolsState = state.schoolsState;
    schoolsState.status = statusHttp.PENDING;
    schoolsState.error = action.error;
  });
});
