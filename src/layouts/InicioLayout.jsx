import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function InicioLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
