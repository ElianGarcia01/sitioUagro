import { createReducer } from "@reduxjs/toolkit";
import { getFeaturedSports, getSports, getTalents } from "../actions/SportsActions";

export const statusHttp = {
  IDLE: "idle",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
  PENDING: "pending",
};

const sportState = {
  sports: [],
  status: statusHttp.IDLE,
  error: null,
};

const talentState = {
  talents: [],
  status: statusHttp.IDLE,
  error: null,
};

const featuredSportState = {
  featureds: [],
  status: statusHttp.IDLE,
  error: null,
};

const initialState = {
  sportState: sportState,
  talentState: talentState,
  featuredSportState: featuredSportState,
};

export const SportsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getSports.fulfilled, (state, action) => {
    state.sportState.sports = action.payload;
    state.sportState.status = statusHttp.SUCCEEDED;
  });
  builder.addCase(getSports.pending, (state) => {
    state.sportState.status = statusHttp.PENDING;
  });
  builder.addCase(getSports.rejected, (state, action) => {
    state.sportState.status = statusHttp.FAILED;
    state.sportState.error = action.error;
  });
  builder.addCase(getTalents.fulfilled, (state, action) => {
    state.talentState.talents = action.payload;
    state.talentState.status = statusHttp.SUCCEEDED;
  });
  builder.addCase(getTalents.pending, (state) => {
    state.talentState.status = statusHttp.PENDING;
  });
  builder.addCase(getTalents.rejected, (state, action) => {
    state.talentState.status = statusHttp.FAILED;
    state.talentState.error = action.error;
  });
  builder.addCase(getFeaturedSports.fulfilled, (state, action) => {
    state.featuredSportState.featureds = action.payload;
    state.featuredSportState.status = statusHttp.SUCCEEDED;
  });
  builder.addCase(getFeaturedSports.pending, (state) => {
    state.featuredSportState.status = statusHttp.PENDING;
  });
  builder.addCase(getFeaturedSports.rejected, (state, action) => {
    state.featuredSportState.status = statusHttp.FAILED;
    state.featuredSportState.error = action.error;
  });
});
