import { createReducer } from "@reduxjs/toolkit";
import { changeRegion, changeSearch, getSchools, getServices } from "../actions/EduActions";

export const statusHttp = {
  IDLE: "idle",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
  PENDING: "pending",
};

const schoolsState = {
  schools: [],
  status: statusHttp.IDLE,
  error: null,
};

const servicesState = {
  services: [],
  status: statusHttp.IDLE,
  error: null,
};

const initialState = {
  schoolsState: schoolsState,
  servicesState: servicesState,
  region: "Todas",
  search: "",
};

export const EduReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeRegion, (state, action) => {
    state.region = action.payload;   
  });

  builder.addCase(changeSearch, (state, action) => {
    state.search = action.payload;
  });
  builder.addCase(getSchools.fulfilled, (state, action) => {
    state.schoolsState.schools = action.payload;
    state.schoolsState.status = statusHttp.SUCCEEDED;
  });

  builder.addCase(getSchools.pending, (state) => {
    state.schoolsState.status = statusHttp.PENDING;
  });

  builder.addCase(getSchools.rejected, (state, action) => {
    state.schoolsState.status = statusHttp.FAILED;
    state.schoolsState.error = action.error;
  });
    builder.addCase(getServices.fulfilled, (state, action) => {
    state.servicesState.services = action.payload;
    state.servicesState.status = statusHttp.SUCCEEDED;
  });

  builder.addCase(getServices.pending, (state) => {
    state.servicesState.status = statusHttp.PENDING;
  });

  builder.addCase(getServices.rejected, (state, action) => {
    state.servicesState.status = statusHttp.FAILED;
    state.servicesState.error = action.error;
  });
});
