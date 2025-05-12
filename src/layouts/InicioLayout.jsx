import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchools } from "../redux/actions/EduActions";
import { statusHttp } from "../redux/reducers/EduReducer";

export default function InicioLayout() {
  const { status } = useSelector((state) => state.school.schoolsState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== statusHttp.IDLE) {
      return;
    }

    dispatch(getSchools());
  }, [dispatch, status]);

  return (
    <>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}
