import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchools, getServices } from "../redux/actions/EduActions";
import {
  getFeaturedSports,
  getSports,
  getTalents,
} from "../redux/actions/SportsActions";
import { statusHttp } from "../redux/reducers/EduReducer";

export default function InicioLayout() {
  const dispatch = useDispatch();

  const schoolStatus = useSelector((state) => state.school.schoolsState.status);
  const sportsStatus = useSelector((state) => state.sports.sportState.status);

  useEffect(() => {
    if (schoolStatus === statusHttp.IDLE) {
      dispatch(getSchools());
      dispatch(getServices());
    }
  }, [dispatch, schoolStatus]);

  useEffect(() => {
    if (sportsStatus === statusHttp.IDLE) {
      dispatch(getSports());
      dispatch(getTalents());
      dispatch(getFeaturedSports());
    }
  }, [dispatch, sportsStatus]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
