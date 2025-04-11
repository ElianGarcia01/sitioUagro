import { ScrollRestoration } from "react-router-dom";
import InicioLayout from "./layouts/InicioLayout";



// Creamos un componente de layout que incluye el ScrollRestoration
export default function Root() {
  return (
    <>
      <ScrollRestoration />
      <InicioLayout />
    </>
  );
}